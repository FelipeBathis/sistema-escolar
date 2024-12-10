Descrição geral do projeto "Aplicativo Escolar em React Native com Navegação via Drawer Menu"
Este projeto é um aplicativo móvel que utiliza o React Native e o Expo.

O aplicativo foi desenvolvido para simular um sistema escolar, tomando como referência o Colégio Fênix.

Ele apresenta cinco telas ou páginas, descritas a seguir.

Início: Exibe uma apresentação geral do próprio aplicativo e dá as boas-vindas aos usuários, que são estudantes, pais e educadores. Além disso, conta com um breve resumo das outras quatro páginas do aplicativo.
Boletim: Apresenta boletim escolar do aluno em formato de tabela, contendo as notas bimestrais, a média final e as faltas em cada disciplina cursada.
Calendário Escolar: Apresenta os eventos e as datas importantes da instituição, incluindo os feriados e recessos de 2025.
Eventos: Exibe os detalhes dos principais eventos do Colégio.
Contato: Exibe o fale conosco do colégio (telefone, WhatsApp, e-mail), endereço e redes sociais.
Lista de tecnologias e bibliotecas utilizadas
Conforme citado anteriormente, este projeto foi desenvolvido em React Native, que é um framework de código aberto que permite criar aplicativos móveis utilizando JavaScript e a biblioteca React.

O projeto também utilizou o Expo, que é uma plataforma e um conjunto de ferramentas que facilita e simplifica o desenvolvimento de aplicativos móveis.

Desse modo, neste projeto foram utilizados componentes básicos do React Native para construir interfaces de usuário interativas.

Os componentes utilizados em cada página do aplicativo estão descritas a seguir.

Para o desenvolvimento da página de Início foram utilizados os seguintes componentes do React Native:

Image: para o logotipo do Colégio Fênix, presente no topo da página.
SafeAreaView: Para garantir que o conteúdo da página não seja cortado em telas com notch ou bordas arredondadas.
ScrollView: Para permitir a rolagem vertical da página, quando o conteúdo da página é maior que a tela do dispositivo.
View: Para funcionar como um contêiner para o componente ScrollView.
Text: Para exibir todo o texto da página, incluindo o título principal e o nome dentro dos botões de direcionamento para as demais páginas.
Pressable: Para que os botões das páginas de Boletim, Calendário Escolar, Eventos e Contato reaja ao toque do usuário.
Link: Para permitir o direcionamento para as páginas de Boletim, Calendário Escolar, Eventos e Contato.
StyleSheet: Para estilizar parâmetros como tamanho, cor (roxo, azul, vermelho e verde), marcador (bullet) e alinhamento (centralizado e justificado) de componentes como Image, Text e Pressable. Nesta página, o StyleSheet aparece no código como Estilo, importado do arquivo geral.jsx, que usa StyleSheet.create para definir os estilos.
Para o desenvolvimento da página de Boletim foram utilizados os seguintes componentes do React Native:

Image: para o logotipo do Colégio Fênix, presente no topo da página.
SafeAreaView: Para garantir que o conteúdo da página não seja cortado em telas com notch ou bordas arredondadas.
ScrollView: Para permitir a rolagem vertical da página, quando o conteúdo da página é maior que a tela do dispositivo.
View: Para funcionar como um contêiner para o componente ScrollView.
Text: Para exibir todo o texto da página, incluindo o título principal, as informações inseridas nas duas tabelas e o nome dentro do botão de direcionamento para a Página de Início.
Pressable: Para que o botão de Voltar ao Início reaja ao toque do usuário.
Link: Para permitir o direcionamento para a Página de Início.
StyleSheet: Para estilizar parâmetros como tamanho, cor (roxo e azul), fonte (negrito) e alinhamento (centralizado e justificado) de componentes como Image, Text e Pressable.
FlatList: Para renderizar a tabela com informações do aluno e em seguida, renderizar as disciplinas e notas.
Além disso, foi utilizada a biblioteca React para a listagem de dados (disciplinas, notas, faltas e informações do aluno) e modularizar o código com funções específicas (renderHeader, renderRow, renderSmallTableRow), deixando-o mais legível e fácil de manter.

Para o desenvolvimento da página de Calendário Escolar foram utilizados os seguintes componentes do React Native:

Image: para o logotipo do Colégio Fênix, presente no topo da página e o Calendário de 2025.
SafeAreaView: Para garantir que o conteúdo da página não seja cortado em telas com notch ou bordas arredondadas.
ScrollView: Para permitir a rolagem vertical da página, quando o conteúdo da página é maior que a tela do dispositivo.
View: Para funcionar como um contêiner para o componente ScrollView.
Text: Para exibir todo o texto da página, incluindo o título principal, os títulos secundários e o nome dentro do botão de direcionamento para a Página de Início.
Pressable: Para que o botão de Voltar ao Início reaja ao toque do usuário.
Link: Para permitir o direcionamento para a Página de Início.
StyleSheet: Para estilizar parâmetros como tamanho, cor (azul), fonte (negrito) e alinhamento (centralizado e justificado) de componentes como Image, Text e Pressable.
Para o desenvolvimento da página de Eventos foram utilizados os seguintes componentes do React Native:

Image: para o logotipo do Colégio Fênix, presente no topo da página.
SafeAreaView: Para garantir que o conteúdo da página não seja cortado em telas com notch ou bordas arredondadas.
ScrollView: Para permitir a rolagem vertical da página, quando o conteúdo da página é maior que a tela do dispositivo.
View: Para funcionar como um contêiner para o componente ScrollView.
Text: Para exibir todo o texto da página, incluindo o título principal, os títulos dos eventos e o nome dentro do botão de direcionamento para a Página de Início.
Pressable: Para que o botão de Voltar ao Início reaja ao toque do usuário.
Link: Para permitir o direcionamento para a Página do Início.
StyleSheet: Para estilizar parâmetros como tamanho, cor (vermelho e azul), fonte (negrito) e alinhamento (centralizado e justificado) de componentes como Image, Text e Pressable.
Para o desenvolvimento da página de Contato foram utilizados os seguintes componentes do React Native:

Image: para o logotipo do Colégio Fênix, presente no topo da página, para os logotipos de telefone, WhatsApp, Instagram e Facebook e para a imagem do colégio.
SafeAreaView: Para garantir que o conteúdo da página não seja cortado em telas com notch ou bordas arredondadas.
ScrollView: Para permitir a rolagem vertical da página, quando o conteúdo da página é maior que a tela do dispositivo.
View: Para funcionar como um contêiner para o componente ScrollView.
Text: Para exibir todo o texto da página, incluindo o título principal, os títulos secundários e o nome dentro do botão de direcionamento para a Página de Início.
Pressable: Para que o botão de Voltar ao Início reaja ao toque do usuário.
Link: Para permitir o direcionamento para a Página de Início.
StyleSheet: Para estilizar parâmetros como tamanho, cor (verde e azul), fonte (negrito) e alinhamento (centralizado e justificado) de componentes como Image, Text e Pressable.
Com o objetivo de permitir a navegação entre as cinco telas, este projeto apresenta um menu de navegação lateral, o Drawer Menu, que está presente em todas as páginas do aplicativo.

Todo o projeto foi desenvolvido no IDE Visual Studio Code.

Instruções sobre como instalar e executar o aplicativo
Bem-vindo ao seu aplicativo Expo 👋
Este é um projeto Expo criado com create-expo-app.

Comece
Instale dependências
npm install
Inicie o aplicativo
npx expo start
Na saída, você encontrará opções para abrir o aplicativo em um

build de desenvolvimento
emulador Android
simulador iOS
Expo Go, um sandbox limitado para testar o desenvolvimento de aplicativos com o Expo
Você pode começar a desenvolver editando os arquivos dentro do diretório app. Este projeto usa roteamento baseado em arquivo.

Obtenha um novo projeto
Quando estiver pronto, execute:

npm run reset-project
Este comando moverá o código inicial para o diretório app-example e criará um diretório app em branco onde você pode começar a desenvolver.

Saiba mais
Para saber mais sobre como desenvolver seu projeto com o Expo, consulte os seguintes recursos:

Documentação do Expo: Aprenda os fundamentos ou aprofunde-se em tópicos avançados com nossos guias.
Tutorial do Learn Expo: Siga um tutorial passo a passo onde você criará um projeto que roda em Android, iOS e na web.
Junte-se à comunidade
Junte-se à nossa comunidade de desenvolvedores que criam aplicativos universais.

Expo no GitHub: Veja nossa plataforma de código aberto e contribua.
Comunidade Discord: Converse com usuários do Expo e faça perguntas.
Informações adicionais
O projeto "Aplicativo Escolar em React Native com Navegação via Drawer Menu" foi desenvolvido para a disciplina de Programação de Aplicativos Mobile I do curso de Desenvolvimento de Sistemas da ETEC Antônio Furlan.
