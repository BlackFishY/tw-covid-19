var requestURL = '/json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    function change0() {
        document.getElementById("city_name").textContent = "台北市:";
        document.getElementById("city_count").textContent = data['台北市'] + "例";
        if (data['台北市'].length == 0) {
            document.getElementById("city_count").textContent = "+0例🎉";
        }
    }
    function change1() {
        document.getElementById("city_name").textContent = "南投縣:";
        document.getElementById("city_count").textContent = data['南投縣'] + "例";
        if (data['南投縣'].length == 0) {
            document.getElementById("city_count").textContent = "+0例🎉";
        }
    }
    function change2() {
        document.getElementById("city_name").textContent = "台中市:";
        document.getElementById("city_count").textContent = data['台中市'] + "例";
        if (data['台中市'].length == 0) {
            document.getElementById("city_count").textContent = "+0例🎉";
        }
    }
    function change3() {
        document.getElementById("city_name").textContent = "台南市:";
        document.getElementById("city_count").textContent = data['台南市'] + "例";
        if (data['台南市'].length == 0) {
            document.getElementById("city_count").textContent = "+0例🎉";
        }
    }
    function change4() {
        document.getElementById("city_name").textContent = "台東縣:";
        document.getElementById("city_count").textContent = data['台東縣'] + "例";
        if (data['台東縣'].length == 0) {
            document.getElementById("city_count").textContent = "+0例🎉";
        }
    }
    function change5() {
        document.getElementById("city_name").textContent = "嘉義市:";
        document.getElementById("city_count").textContent = data['嘉義市'] + "例";
        if (data['嘉義市'].length == 0) {
            document.getElementById("city_count").textContent = "+0例🎉";
        }
    }
    function change6() {
        document.getElementById("city_name").textContent = "嘉義縣:";
        document.getElementById("city_count").textContent = data['嘉義縣'] + "例";
        if (data['嘉義縣'].length == 0) {
            document.getElementById("city_count").textContent = "+0例🎉";
        }
    }
    function change7() {
        document.getElementById("city_name").textContent = "基隆市:";
        document.getElementById("city_count").textContent = data['基隆市'] + "例";
        if (data['基隆市'].length == 0) {
            document.getElementById("city_count").textContent = "+0例🎉";
        }
    }
    function change8() {
        document.getElementById("city_name").textContent = "宜蘭縣:";
        document.getElementById("city_count").textContent = data['宜蘭縣'] + "例";
        if (data['宜蘭縣'].length == 0) {
            document.getElementById("city_count").textContent = "+0例🎉";
        }
    }
    function change9() {
        document.getElementById("city_name").textContent = "屏東縣:";
        document.getElementById("city_count").textContent = data['屏東縣'] + "例";
        if (data['屏東縣'].length == 0) {
            document.getElementById("city_count").textContent = "+0例🎉";
        }
    }
    function change10() {
        document.getElementById("city_name").textContent = "彰化縣:";
        document.getElementById("city_count").textContent = data['彰化縣'] + "例";
        if (data['彰化縣'].length == 0) {
            document.getElementById("city_count").textContent = "+0例🎉";
        }
    }
    function change11() {
        document.getElementById("city_name").textContent = "新北市:";
        document.getElementById("city_count").textContent = data['新北市'] + "例";
        if (data['新北市'].length == 0) {
            document.getElementById("city_count").textContent = "+0例🎉";
        }
    }
    function change12() {
        document.getElementById("city_name").textContent = "新竹市:";
        document.getElementById("city_count").textContent = data['新竹市'] + "例";
        if (data['新竹市'].length == 0) {
            document.getElementById("city_count").textContent = "+0例🎉";
        }
    }
    function change13() {
        document.getElementById("city_name").textContent = "新竹縣:";
        document.getElementById("city_count").textContent = data['新竹縣'] + "例";
        if (data['新竹縣'].length == 0) {
            document.getElementById("city_count").textContent = "+0例🎉";
        }
    }
    function change14() {
        document.getElementById("city_name").textContent = "桃園市:";
        document.getElementById("city_count").textContent = data['桃園市'] + "例";
        if (data['桃園市'].length == 0) {
            document.getElementById("city_count").textContent = "+0例🎉";
        }
    }
    function change15() {
        document.getElementById("city_name").textContent = "澎湖縣:";
        document.getElementById("city_count").textContent = data['澎湖縣'] + "例";
        if (data['澎湖縣'].length == 0) {
            document.getElementById("city_count").textContent = "+0例🎉";
        }
    }
    function change16() {
        document.getElementById("city_name").textContent = "花蓮縣:";
        document.getElementById("city_count").textContent = data['花蓮縣'] + "例";
        if (data['花蓮縣'].length == 0) {
            document.getElementById("city_count").textContent = "+0例🎉";
        }
    }
    function change17() {
        document.getElementById("city_name").textContent = "苗栗縣:";
        document.getElementById("city_count").textContent = data['苗栗縣'] + "例";
        if (data['苗栗縣'].length == 0) {
            document.getElementById("city_count").textContent = "+0例🎉";
        }
    }
    function change19() {
        document.getElementById("city_name").textContent = "金門縣:";
        document.getElementById("city_count").textContent = data['金門縣'] + "例";
        if (data['金門縣'].length == 0) {
            document.getElementById("city_count").textContent = "+0例🎉";
        }
    }
    function change20() {
        document.getElementById("city_name").textContent = "雲林縣:";
        document.getElementById("city_count").textContent = data['雲林縣'] + "例";
        if (data['雲林縣'].length == 0) {
            document.getElementById("city_count").textContent = "+0例🎉";
        }
    }
    function change21() {
        document.getElementById("city_name").textContent = "高雄市:";
        document.getElementById("city_count").textContent = data['高雄市'] + "例";
        if (data['高雄市'].length == 0) {
            document.getElementById("city_count").textContent = "+0例🎉";
        }
    }
    var data = request.response;
    document.getElementById("city_name").textContent = "台北市:";
    document.getElementById("city_count").textContent = data['台北市'] + "例";
    console.log(data)
    console.log(data['今日本土'])
    document.getElementById("date1").textContent = "【台灣" + data['日期'] + "確診】"
    document.getElementById("Today_all").textContent = data['今日確診']
    document.getElementById("date2").textContent = "【" + data['日期'] + "死亡人數】"
    document.getElementById("death").textContent = data['今日死亡']
    document.getElementById("date3").textContent = "【台灣" + data['日期'] + "本土】"
    document.getElementById("in").textContent = data['今日本土']
    document.getElementById("date4").textContent = " ✈台灣" + data['日期'] + "境外:"
    document.getElementById("out").textContent = parseInt(data['今日確診']) - parseInt(data['今日本土'])
    document.getElementById("南投縣").addEventListener('mouseover',change1)
    document.getElementById("南投縣").addEventListener('mouseout',change0)
    document.getElementById("台中市").addEventListener('mouseover',change2)
    document.getElementById("台中市").addEventListener('mouseout',change0)
    document.getElementById("台南市").addEventListener('mouseover',change3)
    document.getElementById("台南市").addEventListener('mouseout',change0)
    document.getElementById("台東縣").addEventListener('mouseover',change4)
    document.getElementById("台東縣").addEventListener('mouseout',change0)
    document.getElementById("嘉義市").addEventListener('mouseover',change5)
    document.getElementById("嘉義市").addEventListener('mouseout',change0)
    document.getElementById("嘉義縣").addEventListener('mouseover',change6)
    document.getElementById("嘉義縣").addEventListener('mouseout',change0)
    document.getElementById("基隆市").addEventListener('mouseover',change7)
    document.getElementById("基隆市").addEventListener('mouseout',change0)
    document.getElementById("宜蘭縣").addEventListener('mouseover',change8)
    document.getElementById("宜蘭縣").addEventListener('mouseout',change0)
    document.getElementById("屏東縣").addEventListener('mouseover',change9)
    document.getElementById("屏東縣").addEventListener('mouseout',change0)
    document.getElementById("彰化縣").addEventListener('mouseover',change10)
    document.getElementById("彰化縣").addEventListener('mouseout',change0)
    document.getElementById("新北市").addEventListener('mouseover',change11)
    document.getElementById("新北市").addEventListener('mouseout',change0)
    document.getElementById("新竹市").addEventListener('mouseover',change12)
    document.getElementById("新竹市").addEventListener('mouseout',change0)
    document.getElementById("新竹縣").addEventListener('mouseover',change13)
    document.getElementById("新竹縣").addEventListener('mouseout',change0)
    document.getElementById("桃園市").addEventListener('mouseover',change14)
    document.getElementById("桃園市").addEventListener('mouseout',change0)
    document.getElementById("澎湖縣").addEventListener('mouseover',change15)
    document.getElementById("澎湖縣").addEventListener('mouseout',change0)
    document.getElementById("花蓮縣").addEventListener('mouseover',change16)
    document.getElementById("花蓮縣").addEventListener('mouseout',change0)
    document.getElementById("苗栗縣").addEventListener('mouseover',change17)
    document.getElementById("苗栗縣").addEventListener('mouseout',change0)
    document.getElementById("金門縣").addEventListener('mouseover',change19)
    document.getElementById("金門縣").addEventListener('mouseout',change0)
    document.getElementById("雲林縣").addEventListener('mouseover',change20)
    document.getElementById("雲林縣").addEventListener('mouseout',change0)
    document.getElementById("高雄市").addEventListener('mouseover',change21)
    document.getElementById("高雄市").addEventListener('mouseout',change0)
    document.getElementById("台北市").addEventListener('mouseover',change0)
    document.getElementById("台北市").addEventListener('mouseout',change0)
}