# Graphql

Javascript에서 NodeJS을 이용해 GraphQL을 활용한 영화 API



- graphql-yoga : **쉽게** 설치하는데 중점을 둔 완전한 GraphQL 서버

  말그대로 GraphQL을 쉽게 시작할 수 있게 만들어 줍니다.

  프론트에서 예를 들자면 React의 create-react-app 명령어와 비슷합니다.

  create-react-app이 리액트 프로젝트를 쉽고 빠르게 시작할 수 있게 해주는 것처럼

  graphql-yoga는 graphql 프로젝트를 쉽고 빠르게 시작할 수 있게 해줍니다!

  ```
  yarn add graphql-yoga
  ```

  

- GraphQL로 해결할 수 있는 문제

  1. Over-fetching

     예를들어 모든 유저들 이름을 웹사이트에 보여주고 싶을 때 URL이  `/users/ GET`라고 합시다.

     users에서는 이름뿐만 아니라 성, 프로필 사진 등, 모든 유저의 정보들까지 전부 보내줍니다.

     이 URL은 이름, 성, 이메일, 성별, 등 모든 유저정보들이 들어있는 큰 패키지를 보내준다는 것인데

     사용하지 않을 데이터를 요청한다는 것은 매우 비효율적이죠ㅠ

     이럴 경우 데이터베이스는 쓸데없는 영역을 보게만들고 고객들은 저희의 앱에서 필요없는 정보들까지 받아버리게 됩니다.

     이렇게 요청한 영역의 정보보다 많은 정보를 서버에서 받아버리는 것을 `Over-fetching`이라고 합니다.

     `Over-fetching`의 단점은 비효율적이고 개발자들이 무엇을 받았는지 알기가 어렵습니다.

     일단 객체를 한꺼번에 받아서 console.log로 다 출력해본 뒤 필요한 정보를 파헤쳐가며 다시 찾아야하죠;;

     => GraphQL을 사용하면 Over-fetching없이 코드를 짤 수 있고 개발자가 원하는 정보만 받게 통제할 수 있습니다.

  2. Under-fetching

     어떤 하나를 완성하기위해 다른 요청을 해야할 때 발생합니다.

     예를들어 인스타그램에 처음 접속하게 되면 인스타그램 페이지의 피드:`/feed/`, 알림: `/notifications/`, 유저 프로필:`/user/1`을 요청해야하는데 그렇다면 앱을 시작하려는 한가지 동작을 위해 3가지 요청이 왔다갔다 총 6번이 작동해야 앱이 시작되게 됩니다.

     이처럼 REST에서 하나를 완성하려고 많은 소스를 요청하는 게 `Under-fetching`이라고 합니다.

     => GraphQL에서는 이 모든 것들을 한번에 받아버릴 수 있습니다 이를 엔드포인트 개념이라고 합니다.

     ​	저런 URL체계가 없는 것이죠.

     

- Graphql의 작동방식

  - Database로 요청할 때 (query)

    ```sql
    // GraphQL 언어
    
    query {
        feed {
            comments
            likeNumber
        }
        notifications {
            isRead
        }
        user {
            username
            profilePic
        }
    }
    ```

  - Database로 부터 정보를 받을 때

    ```javascript
    // Javascript 언어
    
    {
        feed: [
            {
                comments:1,
                likeNumber: 20
            },
            {
                comments:5,
                likeNumber: 30
            },
            ...
        ],
        notifications: [
            {
                isRead: true
            },
            {
                isRead: false
            }
            ...
        ],
        user: {
            username: "Sso",
            profilePic: "http://photo-url"
        }
    }
    ```

    

