# CAMPANHA DE VACINAÇÃO COVID-19 CAMPINAS

Esse projeto tem como objetivo facilitar o encontro dos horarios/dias mais recentes dos locais de vacinação em
Campinas-SP. Para as pessoas que tem agendamento e querem buscar novos horarios. Preencha as informações em
constants.js, userInfo e day são necessárias para autenticação e uma busca mais específica. Há também a possibilidade de
filtrar os resultados por postos de sua preferência, caso esse seja o caso, adicione os ids na lista presente em
heathCenterIds também presente no arquivo de constantes. Os ids podem ser encontrados na lista abaixo.

Exemplo de preenchimento das constantes:

```
const userInfo = {
  cpf: "987654321-00",
  nascimento: "2002-07-15",
  nome: "Gabriel"
}
const day = '2021-08-03' // dia da vacinação acredito que hoje so temos 03/08/2021 e 04/08/2021

const heathCenterIds = [10,28,58]
```

### Como executar:

```
$ npm install
$ node index.js
```

O resultado vai ser um html(EMPTY_SLOTS.html) com todos os resultados encontrados ordenados pelas datas e horários mais
recentes disponíveis.
(no formato json, caso alguém queira desenvolver algo mais bonito sinta-se convidado a contribuir)

Obs.: Não há qualquer intenção de burlar ou fazer qualquer mal a campanha de vacinação em Campinas a minha ideia aqui
era apenas encontrar o rápido para tomar a tão sonhada vacina. Já que pelo frontend da aplicação oficial isso demora
alguns passos.

Mais informações em:

https://vacina.campinas.sp.gov.br/vacinas/covid-19

## Lista de postos de Centros de Saúde

```json
[
  {
    "id": 68,
    "nome": "Aeroporto Internacional de Viracopos",
    "endereco": "Corredor do Edifício Garagem (na antiga sala dos Correios) - Piso 0 / Rodovia Santos Dumont, km 66 - Parque Viracopos, Campinas - SP, 13055-900",
    "latitude": "-23.0013076",
    "longitude": "-47.1350180",
    "max_agendamentos_dia": 5500,
    "ativo": true,
    "categoria_centro_id": 5,
    "vagas_visa": 5
  },
  {
    "id": 5,
    "nome": "Casa da Criança Paralítica",
    "endereco": "Rua Pedro Domingos Vitali, 160 - Parque Italia, Campinas - SP, CEP 13036-180",
    "latitude": "-22.9199877",
    "longitude": "-47.0665914",
    "max_agendamentos_dia": 900,
    "ativo": true,
    "categoria_centro_id": 1,
    "vagas_visa": 5
  },
  {
    "id": 2,
    "nome": "Centro de Imunização Noroeste - Antigo prédio da NAED Noroeste",
    "endereco": "Rua Augusta Parreira Belinteni, s/nº - Vila Castelo Branco, Campinas, 13061-253",
    "latitude": "-22.9169605",
    "longitude": "-47.1103744",
    "max_agendamentos_dia": 900,
    "ativo": true,
    "categoria_centro_id": 1,
    "vagas_visa": 5
  },
  {
    "id": 39,
    "nome": "Centro de Saúde Aurélia",
    "endereco": "Avenida Dona Licínia Teixeira de Sousa, 331, Vila Proost de Souza CEP: 13033660",
    "latitude": "-22.9012954",
    "longitude": "-47.0924037",
    "max_agendamentos_dia": 600,
    "ativo": true,
    "categoria_centro_id": 21,
    "vagas_visa": 5
  },
  {
    "id": 40,
    "nome": "Centro de Saúde Barão Geraldo",
    "endereco": "Avenida Albino José Barbosa de Oliveira, 893, Barão Geraldo CEP: 13084008",
    "latitude": "-22.8313214",
    "longitude": "-47.0788447",
    "max_agendamentos_dia": 600,
    "ativo": true,
    "categoria_centro_id": 27,
    "vagas_visa": 5
  },
  {
    "id": 8,
    "nome": "Centro de Saúde Campo Belo",
    "endereco": "Rua Milton Pereira de Castro, 255 - Jardim Campo Belo - CEP 13053-131",
    "latitude": "-23.0279956",
    "longitude": "-47.1147614",
    "max_agendamentos_dia": 600,
    "ativo": true,
    "categoria_centro_id": 24,
    "vagas_visa": 5
  },
  {
    "id": 11,
    "nome": "Centro de Saúde Campos Elíseos - Tancredo Neves",
    "endereco": "Avenida Tancredo Neves, 5101, Jardim Indianópolis CEP: 13050214",
    "latitude": "-22.9437703",
    "longitude": "-47.0977612",
    "max_agendamentos_dia": 600,
    "ativo": true,
    "categoria_centro_id": 21,
    "vagas_visa": 5
  },
  {
    "id": 33,
    "nome": "Centro de Saúde Carvalho de Moura",
    "endereco": "Rua Celso Luglio, s/n, Parque Residencial Carvalho de Moura CEP: 13051496",
    "latitude": "-22.9550118",
    "longitude": "-47.0796743",
    "max_agendamentos_dia": 600,
    "ativo": true,
    "categoria_centro_id": 21,
    "vagas_visa": 5
  },
  {
    "id": 60,
    "nome": "Centro de Saúde Centro",
    "endereco": "Rua Padre Vieira, 1145, Centro CEP: 13015301",
    "latitude": "-22.9081659",
    "longitude": "-47.0552851",
    "max_agendamentos_dia": 600,
    "ativo": true,
    "categoria_centro_id": 25,
    "vagas_visa": 5
  },
  {
    "id": 14,
    "nome": "Centro de Saúde DIC I",
    "endereco": "Rua Igarapé, 1400, DIC I CEP: 13056399",
    "latitude": "-22.9764380",
    "longitude": "-47.1396577",
    "max_agendamentos_dia": 600,
    "ativo": true,
    "categoria_centro_id": 21,
    "vagas_visa": 5
  },
  {
    "id": 15,
    "nome": "Centro de Saúde DIC III",
    "endereco": "Rua José Caivani, 228, DIC III CEP: 13054240",
    "latitude": "-22.9785595",
    "longitude": "-47.1220749",
    "max_agendamentos_dia": 600,
    "ativo": true,
    "categoria_centro_id": 21,
    "vagas_visa": 5
  },
  {
    "id": 20,
    "nome": "Centro de Saúde DIC VI - Antônia Bersi",
    "endereco": "Rua José Peluci, 35, DIC VI CEP: 13054680",
    "latitude": "-22.9807865",
    "longitude": "-47.1314396",
    "max_agendamentos_dia": 600,
    "ativo": true,
    "categoria_centro_id": 24,
    "vagas_visa": 5
  },
  {
    "id": 44,
    "nome": "Centro de Saúde Doutor Cássio Raposo do Amaral",
    "endereco": "Rua Prefeito Celso Daniel, 600, Conjunto Habitacional Edivaldo Antônio Orsi CEP: 13069079",
    "latitude": "-22.8466742",
    "longitude": "-47.1419586",
    "max_agendamentos_dia": 600,
    "ativo": true,
    "categoria_centro_id": 31,
    "vagas_visa": 5
  },
  {
    "id": 48,
    "nome": "Centro de Saúde Integração",
    "endereco": "Rua Zocca, 161, Vila Castelo Branco CEP: 13061231",
    "latitude": "-22.9148287",
    "longitude": "-47.1128452",
    "max_agendamentos_dia": 600,
    "ativo": true,
    "categoria_centro_id": 21,
    "vagas_visa": 5
  },
  {
    "id": 10,
    "nome": "Centro de Saúde Jardim Aeroporto",
    "endereco": "Rua Cairi, 315 - Vila Aeroporto - CEP 13054-113",
    "latitude": "-22.9714690",
    "longitude": "-47.1265424",
    "max_agendamentos_dia": 600,
    "ativo": true,
    "categoria_centro_id": 21,
    "vagas_visa": 5
  },
  {
    "id": 57,
    "nome": "Centro de Saúde Jardim Bassoli",
    "endereco": "Rua Leonel Ferreira Gomes, s/n, Jardim Bassoli CEP: 13058170",
    "latitude": "-22.9643730",
    "longitude": "-47.2039153",
    "max_agendamentos_dia": 600,
    "ativo": true,
    "categoria_centro_id": 28,
    "vagas_visa": 5
  },
  {
    "id": 13,
    "nome": "Centro de Saúde Jardim Capivari",
    "endereco": "Rua Paulo Mangabeira Albernaz, 710, Jardim Capivari CEP: 13050804",
    "latitude": "-22.9530573",
    "longitude": "-47.1122235",
    "max_agendamentos_dia": 600,
    "ativo": true,
    "categoria_centro_id": 21,
    "vagas_visa": 5
  },
  {
    "id": 65,
    "nome": "Centro de Saúde Jardim Conceição",
    "endereco": "Rua Doutor Silvino de Godoy, 40, Jardim Conceição CEP: 13091020",
    "latitude": "-22.8763402",
    "longitude": "-47.0329375",
    "max_agendamentos_dia": 600,
    "ativo": true,
    "categoria_centro_id": 22,
    "vagas_visa": 5
  },
  {
    "id": 23,
    "nome": "Centro de Saúde Jardim Esmeraldina",
    "endereco": "Rua Miguel Veneroso, 74, Jardim Maísa CEP: 13046350",
    "latitude": "-22.9343393",
    "longitude": "-47.0175919",
    "max_agendamentos_dia": 600,
    "ativo": true,
    "categoria_centro_id": 21,
    "vagas_visa": 5
  },
  {
    "id": 38,
    "nome": "Centro de Saúde Jardim Eulina",
    "endereco": "Rua Martin Luther King Júnior, 286, Jardim Eulina CEP: 13063580",
    "latitude": "-22.8931451",
    "longitude": "-47.1055435",
    "max_agendamentos_dia": 600,
    "ativo": true,
    "categoria_centro_id": 23,
    "vagas_visa": 5
  },
  {
    "id": 7,
    "nome": "Centro de Saúde Jardim Fernanda",
    "endereco": "Rua Victor Baranauskas Filho, 125 - Jardim Fernanda - CEP 13053-639",
    "latitude": "-23.0380768",
    "longitude": "-47.1296768",
    "max_agendamentos_dia": 600,
    "ativo": true,
    "categoria_centro_id": 24,
    "vagas_visa": 5
  },
  {
    "id": 67,
    "nome": "Centro de Saúde Jardim Florence",
    "endereco": "Rua Osvaldo Peralva, s/n° - Jardim Florence, Campinas-SP, CEP 13059067",
    "latitude": "-22.9376483",
    "longitude": "-47.1624210",
    "max_agendamentos_dia": 600,
    "ativo": true,
    "categoria_centro_id": 21,
    "vagas_visa": 5
  },
  {
    "id": 51,
    "nome": "Centro de Saúde Jardim Ipaussurama",
    "endereco": "Avenida Márcio Egídio de Souza Aranha, 351, Jardim Ipaussurama CEP: 13060840",
    "latitude": "-22.9295597",
    "longitude": "-47.1220912",
    "max_agendamentos_dia": 600,
    "ativo": true,
    "categoria_centro_id": 21,
    "vagas_visa": 5
  },
  {
    "id": 69,
    "nome": "Centro de Saúde Jardim Lisa",
    "endereco": "Rua Rio São Francisco, 66 - Residencial Colina das Nascentes - CEP 13058-675 (antiga Rua 2, ao lado do condomínio Morada dos Parques)",
    "latitude": "-22.9546023",
    "longitude": "-47.1777886",
    "max_agendamentos_dia": 600,
    "ativo": true,
    "categoria_centro_id": 23,
    "vagas_visa": 5
  },
  {
    "id": 34,
    "nome": "Centro de Saúde Jardim Paranapanema",
    "endereco": "Rua Boaventura Lemos, 590, Jardim Guarani CEP: 13100215",
    "latitude": "-22.914958",
    "longitude": "-47.380232",
    "max_agendamentos_dia": 600,
    "ativo": true,
    "categoria_centro_id": 27,
    "vagas_visa": 5
  },
  {
    "id": 31,
    "nome": "Centro de Saúde Jardim San Diego",
    "endereco": "Rua Antônio Carlos Folegatti, 368, Jardim San Diego CEP: 13052576",
    "latitude": "-22.9861676",
    "longitude": "-47.0974968",
    "max_agendamentos_dia": 600,
    "ativo": true,
    "categoria_centro_id": 21,
    "vagas_visa": 5
  },
  {
    "id": 9,
    "nome": "Centro de Saúde Jardim Santa Lúcia",
    "endereco": "Rua São Benedito, 50 - Jardim Santa Lúcia - CEP 13060-484",
    "latitude": "-22.9395010",
    "longitude": "-47.1151087",
    "max_agendamentos_dia": 600,
    "ativo": true,
    "categoria_centro_id": 21,
    "vagas_visa": 5
  },
  {
    "id": 36,
    "nome": "Centro de Saúde Jardim Santa Mônica",
    "endereco": "Rua Olívio Manoel de Camargo, 297, Jardim Santa Mônica CEP: 13082125",
    "latitude": "-22.8521469",
    "longitude": "-47.1076948",
    "max_agendamentos_dia": 600,
    "ativo": true,
    "categoria_centro_id": 21,
    "vagas_visa": 5
  },
  {
    "id": 28,
    "nome": "Centro de Saúde Jardim Santa Odila",
    "endereco": "Rua Beato Marcelino Champagnat, 187, Vila Joaquim Inácio CEP: 13045650",
    "latitude": "-22.9341632",
    "longitude": "-47.0366580",
    "max_agendamentos_dia": 600,
    "ativo": true,
    "categoria_centro_id": 21,
    "vagas_visa": 5
  },
  {
    "id": 16,
    "nome": "Centro de Saúde Jardim São Cristóvão",
    "endereco": "Avenida Martinho Lutero, 121, Jardim Adhemar de Barros CEP: 13056230",
    "latitude": "-22.9883961",
    "longitude": "-47.1494156",
    "max_agendamentos_dia": 600,
    "ativo": true,
    "categoria_centro_id": 21,
    "vagas_visa": 5
  },
  {
    "id": 42,
    "nome": "Centro de Saúde Jardim São Marcos",
    "endereco": "Avenida Maria Luiza Pompeo de Camargo, 199, Jardim Campineiro CEP: 13082325",
    "latitude": "-22.8481772",
    "longitude": "-47.1195894",
    "max_agendamentos_dia": 600,
    "ativo": true,
    "categoria_centro_id": 21,
    "vagas_visa": 5
  },
  {
    "id": 26,
    "nome": "Centro de Saúde Jardim São Vicente",
    "endereco": "Rua Júlio Fernandes, 624, Jardim São Pedro CEP: 13046155",
    "latitude": "-22.9318717",
    "longitude": "-47.0257821",
    "max_agendamentos_dia": 600,
    "ativo": true,
    "categoria_centro_id": 23,
    "vagas_visa": 5
  },
  {
    "id": 52,
    "nome": "Centro de Saúde Jardim Satélite Iris",
    "endereco": "Rua Reverendo José Coelho Ferraz, 21, Cidade Satélite Íris CEP: 13059662",
    "latitude": "-22.9358175",
    "longitude": "-47.1384914",
    "max_agendamentos_dia": 600,
    "ativo": true,
    "categoria_centro_id": 23,
    "vagas_visa": 5
  },
  {
    "id": 12,
    "nome": "Centro de Saúde Jardim Vista Alegre",
    "endereco": "Avenida Sinimbu, 903, Parque Universitário de Viracopos CEP: 13056500",
    "latitude": "-22.9690236",
    "longitude": "-47.1494602",
    "max_agendamentos_dia": 600,
    "ativo": true,
    "categoria_centro_id": 21,
    "vagas_visa": 5
  },
  {
    "id": 58,
    "nome": "Centro de Saúde Joaquim Egídio",
    "endereco": "Rua Heitor Penteado, 1225, Joaquim Egídio CEP: 13108002",
    "latitude": "-22.8872849",
    "longitude": "-46.9429258",
    "max_agendamentos_dia": 600,
    "ativo": true,
    "categoria_centro_id": 24,
    "vagas_visa": 5
  },
  {
    "id": 29,
    "nome": "Centro de Saúde Nova América",
    "endereco": "Rua Antonio Fidelis, 400, Jardim Nova América CEP: 13053022",
    "latitude": "-23.0026123",
    "longitude": "-47.1069869",
    "max_agendamentos_dia": 600,
    "ativo": true,
    "categoria_centro_id": 24,
    "vagas_visa": 5
  },
  {
    "id": 24,
    "nome": "Centro de Saúde Parque da Figueira",
    "endereco": "Rua Jerônimo Tognolo, 77, Parque da Figueira CEP: 13040245",
    "latitude": "-22.9462409",
    "longitude": "-47.0597849",
    "max_agendamentos_dia": 600,
    "ativo": true,
    "categoria_centro_id": 27,
    "vagas_visa": 5
  },
  {
    "id": 56,
    "nome": "Centro de Saúde Parque Floresta",
    "endereco": "Rua Flávio Marinho Mendes, 150, Conjunto Habitacional Parque da Floresta CEP: 13058118",
    "latitude": "-22.9561918",
    "longitude": "-47.19661",
    "max_agendamentos_dia": 600,
    "ativo": true,
    "categoria_centro_id": 21,
    "vagas_visa": 5
  },
  {
    "id": 70,
    "nome": "Centro de Saúde Parque Itajaí",
    "endereco": "Rua Paulo Gliwkoff, 160 - Conjunto Habitacional Parque Itajaí - CEP 13058-023",
    "latitude": "-22.9577537",
    "longitude": "-47.1920722",
    "max_agendamentos_dia": 600,
    "ativo": true,
    "categoria_centro_id": 21,
    "vagas_visa": 5
  },
  {
    "id": 30,
    "nome": "Centro de Saúde Parque Oziel",
    "endereco": "Rua Cabo Rúbens Zimmermann, 9, Parque Oziel CEP: 13049003",
    "latitude": "-22.9399739",
    "longitude": "-47.0859137",
    "max_agendamentos_dia": 600,
    "ativo": true,
    "categoria_centro_id": 21,
    "vagas_visa": 5
  },
  {
    "id": 43,
    "nome": "Centro de Saúde Parque Santa Bárbara",
    "endereco": "Rua Joaquim Tarcísio Gallace Zambon, 750, Parque Santa Bárbara CEP: 13064400",
    "latitude": "-22.8956981",
    "longitude": "-47.1481181",
    "max_agendamentos_dia": 600,
    "ativo": true,
    "categoria_centro_id": 21,
    "vagas_visa": 5
  },
  {
    "id": 63,
    "nome": "Centro de Saúde Parque São Quirino",
    "endereco": "Avenida Diogo Álvares, 1450, Parque São Quirino CEP: 13088221",
    "latitude": "-22.8622417",
    "longitude": "-47.037133",
    "max_agendamentos_dia": 600,
    "ativo": true,
    "categoria_centro_id": 26,
    "vagas_visa": 5
  },
  {
    "id": 66,
    "nome": "Centro de Saúde Parque Valença",
    "endereco": "Rua Natale Bertucci, 20 - Parque Valença I, Campinas-SP, CEP 13058525",
    "latitude": "-22.9484275",
    "longitude": "-47.187544",
    "max_agendamentos_dia": 600,
    "ativo": true,
    "categoria_centro_id": 21,
    "vagas_visa": 5
  },
  {
    "id": 49,
    "nome": "Centro de Saúde Pedro de Aquino Neto - Balão do Laranja",
    "endereco": "Avenida Paulo Provenza Sobrinho, 35, Jardim Campos Elíseos CEP: 13060864",
    "latitude": "-22.9295216",
    "longitude": "-47.1010214",
    "max_agendamentos_dia": 600,
    "ativo": true,
    "categoria_centro_id": 21,
    "vagas_visa": 5
  },
  {
    "id": 46,
    "nome": "Centro de Saúde Rosália",
    "endereco": "Rua Luan Carlos Domingos da Glória, 15, Rosália CEP: 13067732",
    "latitude": "-22.8709722",
    "longitude": "-47.1396633",
    "max_agendamentos_dia": 600,
    "ativo": true,
    "categoria_centro_id": 21,
    "vagas_visa": 5
  },
  {
    "id": 54,
    "nome": "Centro de Saúde Rossin",
    "endereco": "Rua Major Adolpho Rossin, 95, Jardim Rossin CEP: 13059220",
    "latitude": "-22.9313797",
    "longitude": "-47.1624589",
    "max_agendamentos_dia": 600,
    "ativo": true,
    "categoria_centro_id": 23,
    "vagas_visa": 5
  },
  {
    "id": 47,
    "nome": "Centro de Saúde San Martin",
    "endereco": "Rua São Francisco Xavier, 208, San Martin CEP: 13069035",
    "latitude": "-22.8402503",
    "longitude": "-47.1565168",
    "max_agendamentos_dia": 600,
    "ativo": true,
    "categoria_centro_id": 31,
    "vagas_visa": 5
  },
  {
    "id": 55,
    "nome": "Centro de Saúde Santa Rosa",
    "endereco": "Rua Geraldo Robim, 150, Jardim Santa Rosa CEP: 13058710",
    "latitude": "-22.9327864",
    "longitude": "-47.1841106",
    "max_agendamentos_dia": 600,
    "ativo": true,
    "categoria_centro_id": 23,
    "vagas_visa": 5
  },
  {
    "id": 19,
    "nome": "Centro de Saúde Santo Antônio",
    "endereco": "Avenida João Prata Vieira, s/n, Parque Vista Alegre CEP: 13054370",
    "latitude": "-22.9854284",
    "longitude": "-47.1176227",
    "max_agendamentos_dia": 600,
    "ativo": true,
    "categoria_centro_id": 21,
    "vagas_visa": 5
  },
  {
    "id": 17,
    "nome": "Centro de Saúde Santos Dumont",
    "endereco": "Rua José Pinto da Silva, 81, Parque Industrial Lisboa CEP: 13052782",
    "latitude": "-22.97828",
    "longitude": "-47.10511",
    "max_agendamentos_dia": 600,
    "ativo": true,
    "categoria_centro_id": 23,
    "vagas_visa": 5
  },
  {
    "id": 27,
    "nome": "Centro de Saúde São Bernardo",
    "endereco": "Avenida João Batista Morato do Canto, 600, São Bernardo CEP: 13031390",
    "latitude": "-22.9156722",
    "longitude": "-47.0771898",
    "max_agendamentos_dia": 600,
    "ativo": true,
    "categoria_centro_id": 27,
    "vagas_visa": 5
  },
  {
    "id": 35,
    "nome": "Centro de Saúde São Domingos",
    "endereco": "Rua Juvenal de Oliveira, s/n, Jardim São Domingos CEP: 13053316",
    "latitude": "-23.0392059",
    "longitude": "-47.1078698",
    "max_agendamentos_dia": 600,
    "ativo": true,
    "categoria_centro_id": 21,
    "vagas_visa": 5
  },
  {
    "id": 25,
    "nome": "Centro de Saúde São José",
    "endereco": "Avenida José Carlos do Amaral Galvão, 184, Jardim São José CEP: 13051160",
    "latitude": "-22.9601934",
    "longitude": "-47.0961011",
    "max_agendamentos_dia": 600,
    "ativo": true,
    "categoria_centro_id": 27,
    "vagas_visa": 5
  },
  {
    "id": 53,
    "nome": "Centro de Saúde Satélite Iris II - Vicente Pisani Neto",
    "endereco": "Rua Ana Monteiro Erbetta, s/n, Cidade Satélite Íris CEP: 13059635",
    "latitude": "-22.9352997",
    "longitude": "-47.1503625",
    "max_agendamentos_dia": 600,
    "ativo": true,
    "categoria_centro_id": 23,
    "vagas_visa": 5
  },
  {
    "id": 59,
    "nome": "Centro de Saúde Sousas",
    "endereco": "Rua Antônio Prado, 410, Sousas CEP: 13106042",
    "latitude": "-22.877129",
    "longitude": "-46.9694548",
    "max_agendamentos_dia": 600,
    "ativo": true,
    "categoria_centro_id": 22,
    "vagas_visa": 5
  },
  {
    "id": 61,
    "nome": "Centro de Saúde Taquaral",
    "endereco": "Rua Henrique Schroeder, 300, Jardim Belo Horizonte CEP: 13076550",
    "latitude": "-22.8813893",
    "longitude": "-47.0470133",
    "max_agendamentos_dia": 600,
    "ativo": true,
    "categoria_centro_id": 22,
    "vagas_visa": 5
  },
  {
    "id": 6,
    "nome": "Centro de Saúde União dos Bairros",
    "endereco": "Rua Margarida Occhiena, s/ nº - Núcleo Residencial Vila Vitória - CEP 13056-798",
    "latitude": "-22.9767243",
    "longitude": "-47.1713143",
    "max_agendamentos_dia": 600,
    "ativo": true,
    "categoria_centro_id": 21,
    "vagas_visa": 5
  },
  {
    "id": 64,
    "nome": "Centro de Saúde Vila 31 de Março",
    "endereco": "Rua Antônio Pavin, 1065, Jardim Conceição CEP: 13091010",
    "latitude": "-22.8722157",
    "longitude": "-47.0281441",
    "max_agendamentos_dia": 600,
    "ativo": true,
    "categoria_centro_id": 30,
    "vagas_visa": 5
  },
  {
    "id": 37,
    "nome": "Centro de Saúde Vila Boa Vista",
    "endereco": "Rua dos Salgueiros, s/n, Vila Boa Vista CEP: 13064741",
    "latitude": "-22.8902537",
    "longitude": "-47.1203404",
    "max_agendamentos_dia": 600,
    "ativo": true,
    "categoria_centro_id": 21,
    "vagas_visa": 5
  },
  {
    "id": 62,
    "nome": "Centro de Saúde Vila Costa e Silva",
    "endereco": "Rua Joaquim Manuel de Macedo, s/n, Jardim Santa Genebra CEP: 13080470",
    "latitude": "-22.8516353",
    "longitude": "-47.0690592",
    "max_agendamentos_dia": 600,
    "ativo": true,
    "categoria_centro_id": 22,
    "vagas_visa": 5
  },
  {
    "id": 32,
    "nome": "Centro de Saúde Vila Ipê",
    "endereco": "Rua Synira de Arruda Valente, 1400, Jardim dos Oliveiras CEP: 13044260",
    "latitude": "-22.9397915",
    "longitude": "-47.0402814",
    "max_agendamentos_dia": 600,
    "ativo": true,
    "categoria_centro_id": 27,
    "vagas_visa": 5
  },
  {
    "id": 22,
    "nome": "Centro de Saúde Vila Orozimbo Maia",
    "endereco": "Rua Doutor Laerte de Moraes, s/n, Vila Orozimbo Maia CEP: 13100640",
    "latitude": "-22.9222386",
    "longitude": "-47.0284688",
    "max_agendamentos_dia": 600,
    "ativo": true,
    "categoria_centro_id": 27,
    "vagas_visa": 5
  },
  {
    "id": 41,
    "nome": "Centro de Saúde Vila Padre Anchieta",
    "endereco": "Avenida Papa João Paulo II,  640, Vila Padre Anchieta CEP: 13068219",
    "latitude": "-22.8625604",
    "longitude": "-47.1527590",
    "max_agendamentos_dia": 600,
    "ativo": true,
    "categoria_centro_id": 21,
    "vagas_visa": 5
  },
  {
    "id": 50,
    "nome": "Centro de Saúde Vila Perseu Leite de Barros",
    "endereco": "Rua Boa Vista, 28, Vila Perseu Leite de Barros CEP: 13060384",
    "latitude": "-22.9266151",
    "longitude": "-47.1128045",
    "max_agendamentos_dia": 600,
    "ativo": true,
    "categoria_centro_id": 21,
    "vagas_visa": 5
  },
  {
    "id": 21,
    "nome": "Centro de Saúde Vila Rica",
    "endereco": "Rua Manganês, 126, Vila Rica CEP: 13050521",
    "latitude": "-22.9329546",
    "longitude": "-47.0946057",
    "max_agendamentos_dia": 600,
    "ativo": true,
    "categoria_centro_id": 24,
    "vagas_visa": 5
  },
  {
    "id": 18,
    "nome": "Centro de Saúde Vila União",
    "endereco": "Rua José Lourenço de Sá, 70, Parque Residencial Vila União CEP: 13060740",
    "latitude": "-22.9376441",
    "longitude": "-47.1194879",
    "max_agendamentos_dia": 600,
    "ativo": true,
    "categoria_centro_id": 23,
    "vagas_visa": 5
  },
  {
    "id": 45,
    "nome": "Centro de Saúde Village",
    "endereco": "Avenida Francisco Cândido Xavier, 546, Village Campinas CEP: 13085732",
    "latitude": "-22.7561342",
    "longitude": "-47.0557606",
    "max_agendamentos_dia": 600,
    "ativo": true,
    "categoria_centro_id": 29,
    "vagas_visa": 5
  },
  {
    "id": 3,
    "nome": "Círculo Militar",
    "endereco": "Av. Getúlio Vargas, 200 - Jardim Chapadão, Campinas - SP, CEP 13070-087",
    "latitude": "-22.8807130",
    "longitude": "-47.0838418",
    "max_agendamentos_dia": 1000,
    "ativo": true,
    "categoria_centro_id": 1,
    "vagas_visa": 5
  },
  {
    "id": 1,
    "nome": "CVI - Centro de Vivência do Idoso na Lagoa do Taquaral",
    "endereco": "Avenida Doutor Heitor Penteado, S/N, Portão 5, Campinas - SP, CEP 13087-000",
    "latitude": "-22.8743856",
    "longitude": "-47.0603631",
    "max_agendamentos_dia": 1150,
    "ativo": true,
    "categoria_centro_id": 1,
    "vagas_visa": 5
  },
  {
    "id": 4,
    "nome": "Escola CAIC Zeferino Vaz",
    "endereco": "Rua José Augusto de Mattos, Parque Residencial Vila União, Campinas - SP, CEP 130607-72",
    "latitude": "-22.9460760",
    "longitude": "-47.1205364",
    "max_agendamentos_dia": 1150,
    "ativo": true,
    "categoria_centro_id": 1,
    "vagas_visa": 5
  }
]
```
