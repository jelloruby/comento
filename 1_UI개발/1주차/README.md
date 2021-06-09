## 2주차


### 📗 지난 1주차에는...
1주차에는 UI 개발에서 중요한 디자인 분석을 위해 
모바일용, 피씨용 PSD 파일을 분석하여 HTML로 마크업을 작성하는 과제가 진행되었다.  
마크업을 하면서 웹접근성을 중심에 두고 작성하였다.  


- 웹접근성 : 장애인, 고령자 등이 웹 사이트에서 제공하는 정보에 비장애인과 동등하게 접근하고 이해할 수 있도록 보장하는 것  


웹접근성을 엄격하게 지켜서 작성해보지 않았는데 이번 과제를 통해 웹접근성에 관해 많이 찾아보게 되었다.  
사실 평소에는 브라우저 상에 그리는 것만 생각하며 마크업을 작성했는데 웹접근성을 지켜 작성하려고 하니 선뜻 작성하기 어려웠다.  
마크업 하나하나에도 많은 것을 고려하며 작성해야 한다는 것을 깨달았고 반성하게 되었다.
특히 이번에 처음 작성해본 코드는 바로 Skip Navigation 이다.
마우스를 사용하지 못하는 사람들이 tab 키로 메뉴를 건너뛰게 할 수 있게 하는 링크이다.


```html
    <div class="skip_navigation">
        <a href="#gnb">메인메뉴 바로가기</a>
        <a href="#mainContent">본문 바로가기</a>
</div>
```


과제의 디자인을 따라 gnb(메인메뉴)와 main(본문)으로 바로 이동해야 한다고 판단하여 두 링크를 추가 하였다.


```css
.skip_navigation {
    width: 100%;
    position: absolute;
    z-index: 9999;
}
.skip_navigation > a {
    width: 100%;
    background: #e4e4e4;
    color: #000000;
    text-align: center;
    display: block;
    position: absolute;
    left: 0;
    top: -50px;
}
.skip_navigation > a:active,
.skip_navigation > a:focus {
    top: 0px;
}
```


사이트에 처음 들어와서 tab을 했을 때 css로 숨겨져 있던 Skip Navigation 이 나타나 링크를 따라 이동할 수 있다.


### 📗 2주차 피드백

