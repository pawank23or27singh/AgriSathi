from apscheduler.schedulers.background import BackgroundScheduler
from app.advisory import send_weekly_advisory

scheduler = BackgroundScheduler()

def start_scheduler():
    scheduler.add_job(send_weekly_advisory, 'interval', weeks=1)
    scheduler.start()
