import requests
from bs4 import BeautifulSoup
import json
import calendar

class Commands:
    def __init__(self):
        pass
    def getData(self):
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

        data={"??????": dateF.replace("-", "/"), "????????????": Today_all.replace("+", ""), "????????????": Today_in.replace("???????????? ", ""), "????????????": Today_death,
        "?????????": newTaipei, "?????????": Taipei, "?????????": Towuan, "?????????": mewoli, "?????????": jilong,
        "?????????": chenhua, "?????????": taichoung, "?????????": yiluan, "?????????": shinchou_shan, "?????????": hualian,
        "?????????":kaoushong, "?????????":tainan, "?????????":shinchou, "?????????":pindoung, "?????????":nantou,
        "?????????":taidoung, "?????????": yunling, "?????????": chaye_shan, "?????????":chaye, "?????????": pounghu,
        "?????????":lianjing, "?????????": kinmen}
        return data