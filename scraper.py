from selenium import webdriver as wd
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from selenium.common import NoSuchElementException

driver = wd.Chrome()
driver.get('https://swiggy.com/search?query=pizza')
WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, '//*[@id="root"]/div[1]/div/div[2]/div/div/div[5]/div[1]/div/a/div/div[1]')))

elm = []
for i in range(4, 1000):
    try:
        elm.append(driver.find_element(By.XPATH, f'//*[@id="root"]/div[1]/div/div[2]/div/div/div[{i}]/div[1]/div/a/div/div[1]').text)
    except NoSuchElementException:
        break
print(elm)
# input()