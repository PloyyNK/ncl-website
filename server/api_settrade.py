from flask import Flask, jsonify
from flask_cors import CORS
from apscheduler.schedulers.background import BackgroundScheduler
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options

app = Flask(__name__)
scheduler = BackgroundScheduler()
CORS(app)

chrome_options = Options()
chrome_options.add_argument("--headless")

def get_info():
    driver = webdriver.Chrome(options=chrome_options)
    driver.get('https://www.set.or.th/th/market/product/stock/quote/NCL/price')

    price = driver.find_element(By.XPATH, '//*[@id="__layout"]/div/div[2]/div[1]/div[5]/div[2]/div[2]/div[3]/h1').text
    name = driver.find_element(By.XPATH, '//*[@id="__layout"]/div/div[2]/div[1]/div[5]/div[2]/div[2]/div[2]/h1').text
    status = driver.find_element(By.XPATH, '//*[@id="__layout"]/div/div[2]/div[1]/div[6]/div/div/div[2]/div[1]/div[1]/span').get_attribute("innerHTML")
    highest = driver.find_element(By.XPATH, '//*[@id="__layout"]/div/div[2]/div[1]/div[6]/div/div/div[2]/div[2]/div[1]/span').get_attribute("innerHTML")
    lowest = driver.find_element(By.XPATH, '//*[@id="__layout"]/div/div[2]/div[1]/div[6]/div/div/div[2]/div[2]/div[2]/span').get_attribute("innerHTML")
    change = driver.find_element(By.XPATH, '//*[@id="__layout"]/div/div[2]/div[1]/div[5]/div[2]/div[2]/div[3]/h3/span[1]').get_attribute("innerHTML")
    change2 = driver.find_element(By.XPATH, '//*[@id="__layout"]/div/div[2]/div[1]/div[5]/div[2]/div[2]/div[3]/h3/span[2]').get_attribute('innerHTML')
    times = driver.find_element(By.XPATH, '//*[@id="__layout"]/div/div[2]/div[1]/div[6]/div/div/div[2]/div[1]/div[2]/span').get_attribute("innerHTML")

    driver.quit()

    return {
        "name": name,
        "price": price,
        "change": change,
        "change2": change2,
        "highest": highest,
        "lowest": lowest,
        "status": status,
        "times": times
    }

@app.route('/get_info', methods=['GET'])
def fetch_info():
    return jsonify(get_info())

if __name__ == '__main__':
    scheduler.add_job(get_info, 'interval', seconds=1)
    scheduler.start()
    app.run()
