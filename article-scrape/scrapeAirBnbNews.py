# Pull in Google Air-BnB Articles

from bs4 import BeautifulSoup as bsoup
import urllib.request
from urllib.request import urlopen
import numpy as np
from html.parser import HTMLParser
import pandas as pd
import json
from requests import get
from requests.exceptions import RequestException
# from contextlib import closing
from selenium import webdriver


def getArticles():
	theUrl = 'https://www.google.com/search?q=airbnb+news&tbm=nws&source=lnt&tbs=qdr:m&sa=X&ved=0ahUKEwiAhMmfkbLeAhVHja0KHS6UCPcQpwUIIQ&biw=1536&bih=706&dpr=1.25'
	browser = webdriver.Chrome('chromedriver.exe')
	# get the html and the link
	browser.get(theUrl)
	source = browser.page_source
	#filter through tags
	pretty = bsoup(source, 'html.parser')
	body = pretty.find('body')
	posts = body.findAll('div',{'class':'ts'})
	images = body.findAll('a',{'class':'top'})

	art =[] #List of objects to populate dataframe
	# if images are needed
	for img in images:
		ii = img.find('img').get('src')

	# loop to add articles to list
	for post in posts:
		tt = (post.find('a',{'class':'l'}).get_text())
		ll = (post.find('a').get('href'))
		dd = (post.find('div',{'class':'st'}).get_text())
		art.append({'title':tt,'link':ll,'desc':dd})
	
	#ADD LIST OF ARTICLE INFO OBJECTS TO DATA FRAME
	articles = pd.DataFrame(art)
	print(art[0])
	return art

getArticles()