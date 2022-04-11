import os
from flask import Flask
from flask import render_template
from flask import jsonify
import requests
from bs4 import BeautifulSoup
import json
import calendar

app = Flask(__name__, static_folder = "templates/static/")

r = requests.get('https://covid-19.nchc.org.tw/dt_005-covidTable_taiwan.php', auth=('user', 'pass'))
soup = BeautifulSoup(r.text, 'lxml')
date1 = soup.find('span', attrs={'style':'font-size: 0.8em; color: #333333; font-weight: 500;'}).text.strip()
date = date1[:date1.index("-")][-4:].strip()
dateA = date1[:date1.index("-")][-4:].strip()
dateB = date1[date1.index("-"):][:3].strip()
dateF = str(list(calendar.month_abbr).index(dateA)) + dateB

Today_all = soup.find("h1", class_="country_recovered mb-1 text-info").text.strip()
Today_in = soup.find_all("span", class_="country_confirmed_percent")[1].text.strip()
Today_death = soup.find("span", class_="country_deaths_change").text.strip()
soup2 = soup.find_all("div", class_="col-lg-12 main")[1]

newTaipei = soup2.find_all('span', attrs={'style':'font-size: 0.8em;'})[0].text.strip()
Taipei = soup2.find_all('span', attrs={'style':'font-size: 0.8em;'})[1].text.strip()
Towuan = soup2.find_all('span', attrs={'style':'font-size: 0.8em;'})[2].text.strip()
mewoli = soup2.find_all('span', attrs={'style':'font-size: 0.8em;'})[3].text.strip()
jilong = soup2.find_all('span', attrs={'style':'font-size: 0.8em;'})[4].text.strip()
chenhua = soup2.find_all('span', attrs={'style':'font-size: 0.8em;'})[5].text.strip()
taichoung = soup2.find_all('span', attrs={'style':'font-size: 0.8em;'})[6].text.strip()
yiluan = soup2.find_all('span', attrs={'style':'font-size: 0.8em;'})[7].text.strip()
shinchou_shan = soup2.find_all('span', attrs={'style':'font-size: 0.8em;'})[8].text.strip()
hualian = soup2.find_all('span', attrs={'style':'font-size: 0.8em;'})[9].text.strip()
kaoushong = soup2.find_all('span', attrs={'style':'font-size: 0.8em;'})[10].text.strip()
tainan = soup2.find_all('span', attrs={'style':'font-size: 0.8em;'})[11].text.strip()
shinchou = soup2.find_all('span', attrs={'style':'font-size: 0.8em;'})[12].text.strip()
pindoung = soup2.find_all('span', attrs={'style':'font-size: 0.8em;'})[13].text.strip()
nantou = soup2.find_all('span', attrs={'style':'font-size: 0.8em;'})[14].text.strip()
taidoung = soup2.find_all('span', attrs={'style':'font-size: 0.8em;'})[15].text.strip()
yunling = soup2.find_all('span', attrs={'style':'font-size: 0.8em;'})[16].text.strip()
chaye_shan = soup2.find_all('span', attrs={'style':'font-size: 0.8em;'})[17].text.strip()
chaye = soup2.find_all('span', attrs={'style':'font-size: 0.8em;'})[18].text.strip()
pounghu = soup2.find_all('span', attrs={'style':'font-size: 0.8em;'})[19].text.strip()
lianjing = soup2.find_all('span', attrs={'style':'font-size: 0.8em;'})[20].text.strip()
kinmen = soup2.find_all('span', attrs={'style':'font-size: 0.8em;'})[21].text.strip()
print(date)

data={"日期": dateF.replace("-", "/"), "今日確診": Today_all.replace("+", ""), "今日本土": Today_in.replace("本土病例 ", ""), "今日死亡": Today_death,
"新北市": newTaipei, "台北市": Taipei, "桃園市": Towuan, "苗栗縣": mewoli, "基隆市": jilong,
"彰化縣": chenhua, "台中市": taichoung, "宜蘭縣": yiluan, "新竹縣": shinchou_shan, "花蓮縣": hualian,
"高雄市":kaoushong, "台南市":tainan, "新竹市":shinchou, "屏東縣":pindoung, "南投縣":nantou,
"台東縣":taidoung, "雲林縣": yunling, "嘉義縣": chaye_shan, "嘉義市":chaye, "澎湖縣": pounghu,
"連江縣":lianjing, "金門縣": kinmen}


@app.route('/')
def hello():
    return render_template('index.html')

@app.route('/json')
def json():
    return jsonify(data)

if __name__ == "__main__":
    port = int(os.environ.get('PORT', 80))
    app.run(host='0.0.0.0', port=port)
