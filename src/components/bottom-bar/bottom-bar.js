import React, { Component } from 'react'
// import './style.scss'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
// import { observable,useStrict} from 'mobx';


// useStrict(true);
// class MyData {
//     @observable title = '张三';
//     @observable name = '李四';
// }

// const mydata = new MyData();
const Con = styled.div`
position: fixed;
left: 0;
bottom: 0;
z-index: 5;
width: 100%;
border-top: 2px solid lightgrey;
display: flex;
align-items: center;
`

const BarItem = styled.section`
width: 80px;
padding:0 10px;
`



class BottomBarItem extends Component {

    render() {
        return (
            <BarItem onClick={this.alertTip}>
                <Link to={this.props.link}>
                    <i style={this.props.style}></i>
                    <div>{this.props.text}</div>
                </Link>
            </BarItem>
        )
    }
    alertTip() {
        console.log('react 弹窗口');
    }
}


const bottomBarData = [{
    background: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAYAAADhu0ooAAAAAXNSR0IArs4c6QAABTxJREFUaAXtmktoFEkYx6taYePELLrgQcWDeIh4EAQvxuxhYdmTb0SMOex9cT1pULOYcSHuEnPSnAUPMSK+9aYgohsvQmDBgxf3EF0PC0aMmbgQp/z+3V0zVT3dPV3VNQ9DCobq7np8/19V13Q9PsaWwuJqAd4onKd3BrrYR/E9GdhBNroFZ91MiDWMsy66X0G/eSbYLOP8Py7YS7p/KRh7xlbyJ717R2bp3mlwCjp1q7hqvlQ6JFi5X3DeQ2DLjdVyvsCFmOTMG19RKFzbtr/43riOmAJOQP8eP7n6A/t8muo/ypjoiLFj+Yh/ooJj37Jl57b2/zljWYlfLBfoP4+KHW/eln6lnjtFgKvzCEkvy2foFf9j/drCxY0/FAFvHKxBJ68M7Cuz8gUaZxuMrdoW4GzaY96xniMjt02r8EwLCCH4XxPHh2gc3mwqJIRSo8Kub590mGg3yvz8XrHw/+zHy0KwgyZGGpGXc3b9m66VP2/fXSxlqT8z6NOJgXVclO8T5LYsFTcjD8FOCe7t6u0b+beevUyvLnqy3SABhkaHLujLDYoxGb6ubdOTKhRgA33pY3aZWiju+qfNc0NU2S9xaW30bMvrFw/EpRuTj5M0pb66+ITQP91QUmGb5zSu5un3G2Kb8ollSKevNyFDIigmA/hOUm9m/sNKsFF5DDhPsD07j4wOI3YJC53QC90Vg8pFImgw43E3GZCQO/pHH8I+Ytew+M76uhVAeRnbW8HcdeEVZVolM+aJo5BqXc/Gj/9Y5uwu9QhWNA4Cn6G58abo3Di2R8MJesMhQeW+Z4VcYGiNVtOjWGrNlebeuliFpPWkpoJu3PYs/9RZ6FyrLvFqehTryWZDAtptz4qOgKPanDWgWDRXk+2uTHpSteASNsqhvbr+9seceGe1MxAqtoVUgZ28xrRTwTr5d3JbRu9R2uNpNSSAnfQstnHAEwYNlLoXG1lWwUVPqoZdwKo8GigZ6laNZb12DSntOoCt8Gig/paktJIxbhSkNJ8HVuXRQGl8rpEGssSNhpQarGEVHh002FyW9afGzYKUIqxgFR4dNNhBl3XXi4dhvF4ml+mhvWGDOivz5yioyRpxEN87A6O5s4b2Bg0qqvDooDgLyRiw2sCqo1mwVpMIhUcHpQOfjJx+tmbBWkFCocKjgYanWias2IlraM9aQ4IzOKXzeTRQeoLjO+PQKNg8kCFEhUcD9c8njTGDAq5hHUDSzgqdt4ZBA8UhLL3XCzLRNHYF6wLS5wBPHCiWNDiElYk2cV5YJ5AkHBxyiQYOvUeRgU6akZAn2MK6goT2KEcNKI7TKZvVYavaOKawLiGhP+CoKqoBDTeUxqpZ7K+ywrqF9PWOqRtjeFIDiofwGaBWyeUzgHoQ6sG6h/T3dUm/HmJB/c1f8hnQs9rfJcG6hySNpDu6eQ3lsaBIgGMEjehpXLsIUdjGQLJpX3eMYG0XMJqO0yn4DJDI1HzRcmn3WMdSOpZag4BPy2uSRvXShoJ3IMmRoy6A7xhRZkUTo63Iyz1W3Nk3ejbJdl1QnHhPTpy4Rq3fcgeNRAhy3OjpO3+Ic5rGJ4TEMSrzozC8P+jVmJLP2imGrkBfMiT01gVFJri4wPuj3WChB7qyuOBkAgUsXFyo5Xqp8uu4b3WADujJ4noDrXXHaBTIH7NXT5yBb4PLf+OonaR7AsQ34GzP4fO/p43JaHljUFnB1+YLaA0K4Kp3ZxkurE5OyGVDRuL3jHvnWuLdqQpZ9P66KiyuF70HdhQY9+3mUx+ncenZUgt8BS3wBVkSxuI3o8RnAAAAAElFTkSuQmCC',
    text: '对分',
    link:'/ma'
}, {
    background: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAYAAADhu0ooAAAAAXNSR0IArs4c6QAAAyxJREFUaAXtWs9rGlEQHl0VTIReUgONWjy0OYb+Aek59FyEtIf20n9AES/trRcR/QPaew+i5FJy7jXJoUgJ2PYgjZtA23gzCvVXZzbu4+2ahf3xNHF9C+HNuvPmm2++2ZdEBkBesgJLWYGAyKwnk0mgUqk8Go/HD7zEDQaDF9ls9mcgEJh4icPvFUa0XC4/HgwGVQy+wwN4sBvhcDiTy+V+eIjBtgaZ5cEgJQWTpGx2KCbF9pAa2yokyFTN7xQV2+0jtt4nhuDCwNZ/gQTf0FZUdVuEqiEXecxs4d9JIpnP57/MODn4oFQqwWg00ohOY3tuXyGt64DDrblKordW+jkBzxxG1Wo10mq13iLeczwQ7P4+VNA/Ns2xi+toartdXMXDg/ACAWvpdPp9JpP5x4PPHEZI8gMSfMU7ObR1wg63Wbrbjod538Mo75BDCtfXfESDonjaxfG0+00OGxv3IZlM8r533m6323B5+VfLU1GUTTz9/+hJGxTFimzrD3Z3n0Iq9VC/XYr17OwXHBzUtVynXBhRw6mLPU7vhnZhRXRzaVY+Z54LETAQXRpGLhKVRF0U7U5vWRlFDaeuE0n6/T6oalvbkkgkIRqNOtlu21cUjmtFO50OHB5+1n7IntclCsc10XkRm1dcy9Y9Pj6CtbVvlri9Xo89Ozk5gtNTa1/m6MJwgsP7mqEsidJfGXYvJ752Y97k5wXHkmgsFgNFsXwMw+EQrq7oHxWA9fUYhELWvjclbfczJzij0RC63euczPEts9vbewZbWwmzP7tXVRXqdfrSD4B8EwlrX7bJheEE5/xchVrtOicz1MocRitD1LJ1zdKb7yORMMTjm9rHZM/rEoXjmiiR3N9/OS9+LK4onJVpXUmU9Y5PDKmoT4RkNKSirBQ+MaSiPhGS0ZCKslL4xJCK+kRIRkMqykrhE0Mq6hMhGQ2pKCuFTwzDd0Y0PorDGhq1ZrO5dBT5nIkLT8AwlYIDDoFisfgVHUSNovJYi7QbhULhCc4xsHlfwztKD2hGFjNqLDIrwVjanC9PkuIbFNUBSVkRk9R6vEWt1K6iJ7cXlbvEkRVY9Qr8B5zlAr9tk0ndAAAAAElFTkSuQmCC',
    text: '代理',
    link: '/li'
}, {
    background: 'data:image/png;base64,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',
    text: '收益',
    link:'ming'
}, {
    background: 'data:image/png;base64,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',
    text: '我的',
    link:'ma'
}]

const res = bottomBarData.map(item => {
    item.style = {
        "display": "block",
        "width": "20px",
        "margin": "0 auto",
        "height": "20px",
        "fontSize": "12px",
        "background": "url(" + item.background + ")",
        "backgroundSize": "contain"
    }
    return <BottomBarItem link={item.link} style={item.style} text={item.text} key={item.text} />
})

export default class BottomBar extends Component {
    render() {
        return (
            <Con>{res}</Con>
        )
    }
    componentDidMount() {
        console.log();
    }

}
