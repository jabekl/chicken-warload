from flask import Blueprint, flash, redirect, render_template, 

views = Blueprint("start", __name__)

@views.route("/")
def index():
	return "Access Denied"

@views.route("/top-3")
def top3(methods=["POST","GET"]):
	if methods = "POST":
		top3 = ["Benedict", "Raphael", "Tim"]
		return top3
	else:
		return "Access Denied"

