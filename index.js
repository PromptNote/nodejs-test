const express = require('express');
var cors = require('cors');
const app = express();
const port = 3001;

app.use(cors()) // Cors 설정을 해주면 html 의 frontend 에서 요청해도 값을 전해줌.즉 모든 요청에 다 응답해주겠다는 코드임

app.get('/', function (req, res) {
    res.send('Hello World');
});

app.get('/sound/:name', function (req, res) {
    const { name } = req.params  // const p= req.params 하고 p.name 보다 간편한 방법

    if (name == "dog") {
        res.json({ 'sound': '멍멍' })
    } else if (name == "cat") {
        res.json({ 'sound': '야옹' })
    } else if (name == "pig") {
        res.json({ 'sound': '꿀꿀' })
    } else {
        res.json({ 'sound': '알수없음' })
    }
});


// app.get('/dog', function (req, res) {
//     res.send("<a href='https://aiable.shop'>내 사이트로 이동</a>"); // a태그로 내사이트 링크 거는 방법
// });

// app.get('/user/:id', function (req, res) {
// const q = req.params // Get 방식에서 params 사용의 예
// console.log(q)
// res.send({'userid':q});

//     const q= req.query  //Get 방식에서 query 사용의 예
//     console.log(q.q)
//     console.log(q.name)
//     console.log(q.age)

//     res.send({'userid':q.name});
// });


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`); // 작은 따옴표 아니고 백틱(`) 사용해야 한다고 함
});
