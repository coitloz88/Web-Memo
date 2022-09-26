# web memo application

'작성자'와 '내용'을 입력받아, 메모를 보여준다.  
이때, 메모는 로컬 저장소에 저장되므로 웹 브라우저를 다시 켜도 이전에 저장했던 메모가 유지된다.  

1. '작성자'와 '내용' 입력받는 기능 구현
2. 입력 받은 내용을 local storage에 저장
3. local storage로부터 내용을 꺼내오기

<details>
<summary>논의해볼 사항</summary>
<div markdown = "1">

* local stoarge 연동
* local storage에서 내용 꺼내오기
* Memo 배열 저장 방법
    - 배열 전체를 꺼내와서 뒤에 `newItem`을 붙인 뒤 다시 저장
    - (현재) 매번 key 새로 생성

</div>
</details>