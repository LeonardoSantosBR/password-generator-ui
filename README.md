## Gerador de senhas com react native

Estou começando um projetinho novo para aprender react native para começar meus conhecimentos com o front-end.<br>link da video aula: https://www.youtube.com/watch?v=VDgihqrZUQg&list=WL&index=2&t=504s<br>
link do figma: https://www.figma.com/design/AMKAH3vBXoID8wgLNmqfKe/Password-App?node-id=0-1&t=AgAdYUCaTgTK6Wq1-0<br><br>
![image](https://github.com/LeonardoSantosBR/password-generator-ui/assets/93662977/40c9108a-3d63-42f5-8711-c476a0182917)<br><br>

### Utilizando os hooks do react para deixar a aplicação dinamica:
<b>useState</b> : é uma variavel mutável na aplicação onde durante o fluxo de lógica, esse valor contido na variavel pode ser mudada ou não,<br>
o nome da variavel se chama caracterSize, e sua função que é chamada para atualizar o seu valor, sendo ela iniciada com 10.
![code](https://github.com/LeonardoSantosBR/password-generator-ui/assets/93662977/b307fd3c-289f-497a-9474-489e08c4d817)
<br><br> 
<b>useEffect</b> : é um hook que causa efeito colateral na aplicação dependendo do array de condições que é inserido caso não for inserido nenhuma condição ele irá ser executado assim que o componente renderiza.
![code](https://github.com/LeonardoSantosBR/password-generator-ui/assets/93662977/e78a6988-105d-4248-8d53-ffd63c99e9ba)
<br><br>
### Utilizando o async storage:
eu utilizei o async storage do react-native, para guardar as senhas geradas no armazenamento, também as funções de get, e remover senha na tela de senhas geradas. 
![code](https://github.com/LeonardoSantosBR/password-generator-ui/assets/93662977/9c081a6a-64f6-4cfb-b879-e76fab6abc2c)

### Criando sistema de criação de usuário e login:
Essa etapa do projeto eu quis criar para meu aprendizado com estados globais da aplicação e integração com o front-end, criado em branch apartada pois ainda está em desenvolvimento.
<table>
  <tr>
    <td>
      <img src="https://github.com/user-attachments/assets/01adae22-eca5-42eb-95d1-f739623aae9a" alt="image1" width="500"/>
    </td>
    <td>
      <img src="https://github.com/user-attachments/assets/b96d917c-c742-4bec-9ee4-df17d954b4a1" alt="image2" width="500"/>
    </td>
  </tr>
</table>



