import time
from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys

options = webdriver.EdgeOptions()
options.add_argument("--headless")
options.add_experimental_option("excludeSwitches", ["disable-popup-blocking"])
driver = webdriver.Edge(options)

def searchSafeway(url):
    driver.get(url)
    #driver.get("https://www.safeway.com/shop/search-results.html?q=granola")

    wait = WebDriverWait(driver, 10)
    element = wait.until(EC.presence_of_element_located((By.CLASS_NAME, "product-card-column")))

    driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")

    all_products = driver.find_elements(By.CLASS_NAME, 'product-card-column')

    parsed = []
    for i in range(4):
        parsed.append(all_products[i].find_element(By.CLASS_NAME, 'product-title__text').text)

    driver.quit()

    return parsed
