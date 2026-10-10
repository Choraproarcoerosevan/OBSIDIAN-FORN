// SUBSTITUA no seu script.js as constantes DISCORD_INVITE, PIX_KEY e o array products
// Os preços abaixo JÁ incluem o acréscimo de R$ 2,00. Não some mais R$ 2 no checkout.

const DISCORD_INVITE = "https://discord.gg/J89MEVNY";
const PIX_KEY = "augusto201038@gmail.com";

const products = [
  // CONTAS / VIRGENS
  {
    id: "p1", name: "Virgem -30d", category: "Contas Discord",
    description: "Conta Discord -30 dias. Confira os detalhes antes da compra.",
    price: 2.45, symbol: "◉", tag: "VIRGEM", stock: 9
  },
  {
    id: "p2", name: "Virgem +30d", category: "Contas Discord",
    description: "Conta Discord +30 dias. Sem estoque no momento.",
    price: 2.99, symbol: "◉", tag: "VIRGEM", stock: 0
  },
  {
    id: "p3", name: "Conta 2023", category: "Contas Discord",
    description: "Conta Discord de 2023. Sem estoque no momento.",
    price: 4.99, symbol: "◉", tag: "CONTA", stock: 0
  },
  {
    id: "p4", name: "Conta 2022", category: "Contas Discord",
    description: "Conta Discord de 2022. Sem estoque no momento.",
    price: 5.67, symbol: "◉", tag: "CONTA", stock: 0
  },
  {
    id: "p5", name: "Conta 2021", category: "Contas Discord",
    description: "Conta Discord de 2021. Sem estoque no momento.",
    price: 6.50, symbol: "◉", tag: "CONTA", stock: 0
  },
  {
    id: "p6", name: "Conta 2020", category: "Contas Discord",
    description: "Conta Discord de 2020. Sem estoque no momento.",
    price: 7.50, symbol: "◉", tag: "CONTA", stock: 0
  },
  {
    id: "p7", name: "Conta 2019", category: "Contas Discord",
    description: "Conta Discord de 2019. Sem estoque no momento.",
    price: 13.90, symbol: "◉", tag: "CONTA", stock: 0
  },
  {
    id: "p8", name: "Conta 2018", category: "Contas Discord",
    description: "Conta Discord de 2018. Sem estoque no momento.",
    price: 16.90, symbol: "◉", tag: "CONTA", stock: 0
  },
  {
    id: "p9", name: "Conta 2017", category: "Contas Discord",
    description: "Conta Discord de 2017. Sem estoque no momento.",
    price: 21.90, symbol: "◉", tag: "CONTA", stock: 0
  },

  // BOOSTS
  {
    id: "p10", name: "2x Boost | 1 Mês", category: "Boosts",
    description: "Pacote de 2 boosts por 1 mês.",
    price: 4.67, symbol: "💎", tag: "BOOST", stock: 99
  },
  {
    id: "p11", name: "8x Boost | 1 Mês", category: "Boosts",
    description: "Pacote de 8 boosts por 1 mês.",
    price: 11.90, symbol: "💎", tag: "BOOST", stock: 100
  },
  {
    id: "p12", name: "14x Boost | 1 Mês", category: "Boosts",
    description: "Pacote de 14 boosts por 1 mês.",
    price: 19.90, symbol: "💎", tag: "BOOST", stock: 96
  },

  // NITRO / GAMING
  {
    id: "p13", name: "Nitro Mensal | 1 Mês", category: "Discord Nitro",
    description: "Plano mensal por 1 mês. Sem estoque no momento.",
    price: 2.67, symbol: "◉", tag: "NITRO", stock: 0
  },
  {
    id: "p14", name: "Nitro Trimestral | 3 Meses", category: "Discord Nitro",
    description: "Plano por 3 meses. Sem estoque no momento.",
    price: 5.90, symbol: "◉", tag: "NITRO", stock: 0
  },
  {
    id: "p15", name: "Conta N1tr2da | 1 Mês", category: "Contas",
    description: "Conta com plano de 1 mês.",
    price: 5.50, symbol: "◉", tag: "CONTA", stock: 5
  },
  {
    id: "p16", name: "Conta N1tr2da | 3 Meses", category: "Contas",
    description: "Conta com plano de 3 meses.",
    price: 9.90, symbol: "◉", tag: "CONTA", stock: 1
  },

  // MEMBROS
  {
    id: "p17", name: "50x Membros Online | Gift", category: "Membros",
    description: "Pacote de 50 membros online.",
    price: 2.85, symbol: "🟢", tag: "MEMBROS", stock: 88
  },
  {
    id: "p18", name: "100x Membros Online | Gift", category: "Membros",
    description: "Pacote de 100 membros online.",
    price: 3.75, symbol: "🟢", tag: "MEMBROS", stock: 71
  },
  {
    id: "p19", name: "50x Membros Offline | Gift", category: "Membros",
    description: "Pacote de 50 membros offline.",
    price: 2.75, symbol: "🔴", tag: "MEMBROS", stock: 18
  },
  {
    id: "p20", name: "100x Membros Offline | Gift", category: "Membros",
    description: "Pacote de 100 membros offline.",
    price: 3.35, symbol: "🔴", tag: "MEMBROS", stock: 100
  }
];

// DICA: se o seu script atual já tiver uma função money(), mantenha-a.
// Exemplo de formatação de preço:
// const money = value => value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
