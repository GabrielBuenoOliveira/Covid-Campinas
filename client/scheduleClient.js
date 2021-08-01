const axios = require("axios")
const {userInfo, heathCenterIds} = require("../constants");
const url = 'https://agenda-vacina-api.campinas.sp.gov.br'

let auth;
let schedule;

const getUserScheduledInfo = async () => {
  await getAuth();
  if (!schedule) {
    return await axios.get(`${url}/api/v1/agendamentos`, {
      headers: {token: auth.token}
    })
      .then(response => schedule = response.data[0])
      .catch(e => console.log(`Error trying get scheduled slot. ${e}`))
  }
  return schedule;

}

const getAuth = async () => {
  if (!auth) {
    return await axios.post(`${url}/api/v1/autenticacao/auth_cpf_reagendamento`, userInfo)
      .then(response => {
        auth = response.data;
      })
      .catch(e => console.log(`Error trying get auth for user ${userInfo}. ${e}`))
  }
  return auth;
}

const getScheduleSlots = async (day) => {
  await getAuth();
  await getUserScheduledInfo();
  return await axios.get(`${url}/api/v1/cronogramas`, {
    params: {
      reagendamento_id: schedule.id,
      aplicacao_veiculo: false,
      dia: day
    },
    headers: {token: auth.token}
  })
    .then(response => {
      return (heathCenterIds.length > 0) ?
        response.data
          .filter(center => heathCenterIds.includes(center.posto.centro_id))
          .sort((a, b) => new Date(a.inicio) - new Date(b.inicio)) :
        response.data
          .sort((a, b) => new Date(a.inicio) - new Date(b.inicio));
    })
    .catch(e => `Error trying get slots. ${e}`)
}
module.exports = {
  getScheduleSlots
}
