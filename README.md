# Week 4-1

## 과제

> 검색창 구현 + 검색어 추천 기능 구현 + 캐싱 기능 구현
>
> 해당 사이트에서 [검색영역 클론](https://clinicaltrialskorea.com/)하기

---

<br/>

## 기본 사항

- 배포 링크 : [DEMO](https://clinicaltrialskorea-clone.netlify.app/)
- 진행 기간 : 7월 16일(일) 12:00 ~ 7월 19일(수) 24:00

---

<br/>

## How To Run

```shell
$ npm install
$ npm start
```

---

<br/>

## Tech Stack

### 개발

- **React**
- **TypeScript**
- **styled-components**
- **axios**
- **react-router-dom**
- **eslint**
- **prettier**

---

<br/>

## 구현 중점 사항

### 목표

#### 해당 사이트에서 [검색영역 클론](https://clinicaltrialskorea.com/)하기

- 검색창 구현
- 검색어 추천 기능 구현
- 캐싱 기능 구현
- 클라이언트 및 서버 배포 - 선택

### 폴더 구조

```
📦pre-onboarding-11th-4-9
 ┣ 📂public
 ┃ ┣ 📜favicon.ico
 ┃ ┣ 📜index.html
 ┃ ┣ 📜logo192.png
 ┃ ┣ 📜logo512.png
 ┃ ┣ 📜manifest.json
 ┃ ┗ 📜robots.txt
 ┣ 📂src
 ┃ ┣ 📂apis
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┗ 📜search.ts
 ┃ ┣ 📂assets
 ┃ ┃ ┣ 📜close.svg
 ┃ ┃ ┣ 📜communicatingPeople.svg
 ┃ ┃ ┣ 📜drawBoardPerson.svg
 ┃ ┃ ┣ 📜logo.svg
 ┃ ┃ ┣ 📜react.svg
 ┃ ┃ ┣ 📜researchingPerson.svg
 ┃ ┃ ┗ 📜search.svg
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂Layout
 ┃ ┃ ┃ ┣ 📜Footer.tsx
 ┃ ┃ ┃ ┣ 📜Header.tsx
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┗ 📜Navigation.tsx
 ┃ ┃ ┣ 📜Button.tsx
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┗ 📜Title.tsx
 ┃ ┣ 📂constants
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┣ 📜path.ts
 ┃ ┃ ┗ 📜url.ts
 ┃ ┣ 📂hooks
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┣ 📜useDebounce.tsx
 ┃ ┃ ┣ 📜useOutSideClick.tsx
 ┃ ┃ ┗ 📜useSearch.tsx
 ┃ ┣ 📂pages
 ┃ ┃ ┣ 📂Home
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┣ 📜Search.tsx
 ┃ ┃ ┃ ┗ 📜SearchList.tsx
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┗ 📜Root.tsx
 ┃ ┣ 📂routes
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂services
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┗ 📜search.ts
 ┃ ┣ 📂styles
 ┃ ┃ ┣ 📜Global.style.ts
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┗ 📜theme.ts
 ┃ ┣ 📂types
 ┃ ┃ ┣ 📜extensions.d.ts
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┣ 📜search.ts
 ┃ ┃ ┗ 📜styled.d.ts
 ┃ ┣ 📂utils
 ┃ ┃ ┣ 📜cache.ts
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📜App.tsx
 ┃ ┗ 📜index.tsx
 ┣ 📜.eslintrc.json
 ┣ 📜.gitignore
 ┣ 📜.prettierrc
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┣ 📜README.md
 ┗ 📜tsconfig.json
```

---

<br/>

### 1. 요구사항

> 질환명 검색시 API 호출 통해서 검색어 추천 기능 구현
> 검색어가 없을 시 "검색어 없음" 표출
> <img src="https://lean-mahogany-686.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F81d5016d-ca92-494c-a90c-5458ffde01c5%2FUntitled.png?id=ef3667f4-8100-4ce0-8ec5-29dfb94bb8f1&table=block&spaceId=72b256b1-ae08-4e70-bb6c-f9c3cad5a793&width=2000&userId=&cache=v2"/>

#### 접근 방법

- input field 값을 API 요청시 queryString으로 넣어 해당 string을 포함하는 sick data list를 배열 형태로 얻는다.

  - useState와 onChange를 활용한 controlled 방식으로 input field 값을 얻는다.
  - API 요청하기 위한 비지니스 로직을 구현하여 sick data list를 배열 형태로 얻는다.

    ```ts
    // service/search.ts
    const instance = axios.create({
      baseURL: BASE_URL,
    });

    export const searchServices = {
      get() {
        // 캐시 관련 로직
        return instance;
      },
    };
    ```

    ```ts
    // apis/search.ts
    const instance = searchServices.get();

    export const searchApi = {
      async get(search: string) {
        const url = `/sick?q=${search}`;
        // 캐시 관련 로직
        const { data } = await instance.get<SearchType[]>(url);
        console.info('calling api');

        return data;
      },
    };
    ```

  - Search, SearchList 컴포넌트와 useSearch 기능을 활용하여 얻어낸 sick data list를 배열로 나열했다.
    - 추가적으로 input field에 존재하는 X 버튼을 클릭하면, input field value가 빈 문자열로 초기화하게 했다.
    - useOutSideClick hook을 구현하여 바깥쪽을 클릭했을 때, 검색 추천 리스트를 감추게 했다.

---

<br/>

### 2. 요구사항

> - API 호출별로 로컬 캐싱 구현
>   - 캐싱 기능을 제공하는 라이브러리 사용 금지(React-Query 등)
>   - 캐싱을 어떻게 기술했는지에 대한 내용 README에 기술
>   - expire time을 구현할 경우 가산점

#### 접근 방법

- cacheStorage를 활용하여 서버 데이터를 캐시로 저장하고, 필요할 때 저장된 데이터를 반환하여 서버 부하를 줄이는 방식을 택했다.

  - cacheStorage에 Response 객체를 저장할 때, put 메서드를 이용하여 추가 및 기존 Response를 덮어써 add 메서드를 사용하지 않아 추가적인 메서드 구현을 줄였다.
  - cacheStorage는 Response 객체를 저장하는데, AxiosResponse 객체는 저장할 수 없으므로, data만 추출하여 생성자 Response으로 Response 객체로 만들어서 저장했다.
    - Response 객체 대신 URI를 통해 Response 객체로 변환하여 저장할 수 있다.
    - 그러나, URI에는 BASE_URL과 pathname이 있고, BASE_URL을 중복해서 사용하는 것을 줄이고자 axios instance에 등록했기 때문에 URI 대신 Response 생성자 함수를 사용하게 되었다.
  - cacheStorage를 구분하기 위한 Key는 즉시실행 함수를 활용한 클로저로 구현하여 응집도를 높였다.
  - cacheStorage에 저장된 값을 얻기 위해 match 메서드를 활용하여 캐시된 Response 객체 얻었다.

  ```ts
  export const cache = (() => {
    const EXPIRATION_TIME = 60 * 60 * 1000; // 60 * 60 * 1000 = 1hour
    const SEARCH_KEY = 'searchCache';

    return {
      async set(url: string, data: unknown) {
        const cacheStorage = await caches.open(SEARCH_KEY);
        const response = new Response(JSON.stringify({ data, expirationTime: Date.now() + EXPIRATION_TIME }));

        await cacheStorage.put(url, response);
      },
      async get(url: string) {
        const cacheStorage = await caches.open(SEARCH_KEY);
        const cacheResponse = await cacheStorage.match(url);

        return cacheResponse;
      },
    };
  })();
  ```

  - 만료시간을 구현하기 위해 Date 객체와 사용자 정의 시간(ms)을 활용했다.

    - 서버에 캐시 데이터를 저장할 때, 현재 시간 + 사용자 정의 시간(ms)를 함께 저장한다. 이를 `캐시로 저장된 만료시간`이라고 부르겠다.
    - 이후 서버에 재요청을 할 때 현재 시간과 `캐시로 저장된 만료시간`를 비교하여 만료시간을 넘지 않은 경우 API 요청을 보내지 않고 캐시 데이터를 반환한다.

      ```ts
      // apis/search.ts
      const instance = searchServices.get();

      export const searchApi = {
        async get(search: string) {
          const url = `/sick?q=${search}`;
          const res = await cache.get(url);

          if (res) {
            const { data, expirationTime } = await res.json();

            if (Date.now() < expirationTime) return data as SearchType[]; // 만료시간이 남아있다면 캐시 데이터 반환
          }

          const { data } = await instance.get<SearchType[]>(url);
          console.info('calling api');

          return data;
        },
      };
      ```

    - 현재 시간과 `캐시로 저장된 만료시간`를 비교하여 만료시간을 넘은 경우 API 요청을 보내고, 얻은 data와 현재 시간 + 사용자 정의 시간(ms)를 함께 저장한다.

      - axios interceptors를 활용하여 api 요청시 캐시 데이터를 저장했다.
        - apis/search.ts 내부에서 API 요청 이후에 캐시 저장과 비교했을 때, 로직 분리를 통해 가독성이 더 낫다고 판단되었다.
          - API 요청을 보내기 전에 캐시 데이터가 있으면 캐시 데이터를 얻고, 없거나 만료시간이 지나면 API 요청을 보낸다 => apis/search.ts
          - API 요청을 보내고 얻은 데이터는 캐시로 저장한다. => services/search.ts

      ```ts
      // services/search.ts
      const instance = axios.create({
        baseURL: BASE_URL,
      });

      export const searchServices = {
        get() {
          instance.interceptors.response.use(
            async res => {
              const { url = '' } = res.config;

              await cache.set(url, res.data); // 캐시 저장

              return res;
            },
            err => {
              return Promise.reject(err);
            },
          );

          return instance;
        },
      };
      ```

---

<br/>

### 3. 요구사항

> - 입력마다 API 호출하지 않도록 API 호출 횟수를 줄이는 전략 수립 및 실행
>   - README에 전략에 대한 설명 기술

#### 접근 방법

- 입력마다 onChange 이벤트 핸들러 함수가 호출되어 input field 값이 업데이트된다.

  - input field 값이 변경될 떄마다 과도한 API 호출을 하게되는 이슈가 있다.
  - 입력이 종료되는 시점에 API 호출을 하는 debounce 프로그래밍 기법을 사용했다.
    - onChange에 debounce를 적용할 경우, 키보드 입력이 종료될 때 사용자의 화면에 입력값이 표시되기 때문에 사용자 측면에 좋지 않다.
    - 그렇기 떄문에, onChange는 기존대로 동작해야한다.
    - onChange로 input field 값이 변경될 때, 입력이 종료되면 요청할 수 있도록 debounceValue를 반환하는 useDebounce hook을 구현했다.
    - 결과적으로 딜레이가 걸린 debounceValue가 변경되면 debounceValue으로 API 요청을 보내 과도한 API 호출을 방지할 수 있도록 했다.

  ```ts
  const useDebounce = (value: string, delay = 500) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
      const timer = setTimeout(() => setDebouncedValue(value), delay);

      return () => clearTimeout(timer);
    }, [value, delay]);

    return debouncedValue;
  };
  ```

---

<br/>

### 4. 요구사항

> API를 호출할 때 마다 console.info("calling api") 출력을 통해 콘솔창에서 API 호출 횟수 확인이 가능하도록 설정

#### 접근 방법

- API 호출 이후에 `console.log` 메서드를 호출하여 콘솔창에서 API 호출 횟수를 확인할 수 있도록 했다.

  ```ts
  // apis/search.ts
  export const searchApi = {
    async get(search: string) {
      // ...
      const { data } = await instance.get<SearchType[]>(url);
      console.info('calling api');

      return data;
    },
  };
  ```

---

<br/>

### 5. 요구사항

> - 키보드만으로 추천 검색어들로 이동 가능하도록 구현
>   - 사용법 README에 기술

#### 접근 방법

- ***

<br/>

### 6. 요구사항

> 개발 조건 및 환경
>
> - 기간: 7월 16일(일) 12:00 ~ 7월 19일(수) 24:00
> - 언어 : JavaScript / TypeScript
> - 사용가능한 기술:
>   - 전역 상태 관리 툴(필수 사용 X, 필요 시 사용)
>   - 스타일 관련 라이브러리(styled-components, emotion, UI kit, tailwind, antd 등)
>   - HTTP Client(axios 등)
>   - 라우팅 관련 라이브러리(react-router-dom)

#### 접근 방법

- 휴면에러를 줄이기 위해 `JavaScript`대신 `TypeScript` 언어를 선택했다.
- 전역 상태 관리 라이브러리를 사용할 필요가 없다고 판단했다.
- UI 라이브러리를 활용하는 것 대신, styled-components를 사용하여 스타일링 실력을 향상시키고자 했다.
  - 또한, common 컴포넌트를 구현하는 실력을 향상시키고 싶었다.
- axios를 사용하여 특정 에러(404)도 에러로 관리하고 싶었다.
- react-router-dom 라이브러리의 라우팅 기술로 필요한 부분만 서버에 요청하는 SPA 기법을 사용하여, 기존 방식인 새로고침을 통해 발생하는 서버 부하를 해소하고자 했다.
