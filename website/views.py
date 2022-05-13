from flask import Blueprint, flash, redirect, render_template, request
import json
import os

views = Blueprint("start", __name__)

@views.route("/")
def index():
	return top3_get()

@views.route("/top-3-post")
def top3(methods=["POST"]):
	if request.method == "POST":
		result = request.form.getlist()	
		print(result)
		return "Success"
	return "Fail"

@views.route("/top-3")
def top3_get():

	with open("./website/counter.json") as f:
		top3 = json.loads(f.read())

	return top3
