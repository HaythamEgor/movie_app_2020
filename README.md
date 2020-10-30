# 은다인 201740127

## movie_app_2020
React JS Fundamentals Course 2020

## 10월 30일
1. ES6의 구조 분해 할당 사용방법을 익힘
    └ex) const {data: {data: {movies}}} = await
2. key와 key값이 같을경우엔 둘다 써주지 않아도 됨
    └ex) this.setState({movies: movies}) == this.setState({movies})

## 10월 16일
isLoading state 특징
앱이 실행(mount)되는 초기에는 무조건 로딩 상태이기 때문에 값은 true
삼항연산자로 로딩 상태를 알려주는 문장을 만듬
강제로 false로 바꿔서 로딩 현상을 구현

API 특징
특정 주소를 입력하면 그 주소에 맞는 결과를 보내줌
조건도 붙일 수 있도록 제공
API를 사용하려면 axios를 설치 후 import해야함
이때, componentDidUnmount() 함수에서 axios.get() 함수의 인자에 URL을 전달하여 API를 호출
async, await
자바스크립트에서 시간이 필요하다는 것을 알리기 위해서 사용되는 키워드
시간이 필요하다는 것을 알리려면 async를 () 앞에 붙이고, 실제 시간이 필요한 대상인 axios.get() 함수에는 await를 붙임


## 10월 7일
1. Prop-type는 컴포넌트가 전달받은 props가 원하는 값인지 확인해주는 역할
2. isRequired는 필요하다는 뜻으로 OOO에는 OOO이 반드시 필요하다는 뜻
    └name: PropTypes.string.isRequired => name에는 string자료형이 반드시 필요
3. ([PropTypes.string, PropTypes.number]) 와 같이 자료형을 여러개 지정할 수도 있음
4. state는 동적 데이터를 다룰때 사용
5. props는 동적 데이터를 다루지 못 함
6. state는 클래스형 컴포넌트에서 사용할 수 있는 개념
7. JSX를 반환할떄 함수는 return이 가능하지만 클래스는 return이 불가능 따라서 render함수를 사용해야함
8. react는 클래스형 컴포넌트의 render함수를 자동으로 실행시켜줌
9. react는 원래 state가 변경되면 render함수를 다시 실행하여 변경된 state를 화면에 출력하지만
    state를 직접 변경하는경우엔 render함수를 다시 실행하지 않는다 즉 state를 간접적으로 변경해야함


## 09월 25일
1. 배열에 있는 원소들을 하나씩 꺼내준다
2. 반환값을 배열로 반환
3. 배열의 원소가 1개씩 전달되면서 함수가 반복하여 실행
4. 이미지를 출력하기 위해서는  태그를 사용
5. 리스트의 각 원소는 유일한 "key" prop을 가짐
6. React의 원소들은 유일해야 하므로 배열의 원소에 id값을 추가
7. id는 컴포넌트가 서로 다르다는 것을 알려주는 값
8. 어떤 브라우저던 F12 개발자 도구임
9. F12를 눌렀을때 WARNING이 뜨면 Key값을 부여
 
 컴포넌트 이미지 출력
1. 이미지를 삽입할 때는 import를 사용
2. 이미지에는 alt 속성을 무조건 추가
3. 상대 경로로 이미지를 삽입할 때는 src폴더 내부에 이미지를 저장
4. import 외에도 상대 경로 삽입 방법에는 require를 사용
5. 이미지폴더는 루트폴더에 만들면 오류가 생김
6. 이미지폴더 내의 파일은 임포트 해야만 사용 가능


## 09월 18일
1. 컴포넌트가 무엇인지 알아보고, JSX를 학습
2. JSX는 단지 HTML과 자바스크립트를 조합한 문법이다
3. 컴포넌트 이름의 첫자는 반드시 대문자로 해야한다
4. 컴포넌트에 데이터를 전달 할 때는 props를 사용한다
5. 점 연산자를 대신해서 ES6의 구조 분해 할달을 사용 할 수 있다
6. 리액트는 다수의 컴포넌트로 이루어지나, 최종적으론 하나의 컴포넌트만 사용

## 9월 11일
1. DOthome 에 indexfile 수정하기
2. readme.md 수정 후 Github에 push하기.