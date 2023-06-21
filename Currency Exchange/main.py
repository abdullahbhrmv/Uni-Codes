import requests
import tkinter as tk
from tkinter import ttk

def get_exchange_rate(currency):
    url = f"https://api.exchangerate-api.com/v4/latest/TRY"
    response = requests.get(url)
    data = response.json()
    exchange_rate = data["rates"][currency]
    return exchange_rate

def convert_currency():
    try:
        amount = float(amount_entry.get())
        selected_currency = currency_combobox.get()
        rate = get_exchange_rate(selected_currency)
        converted_amount = amount * rate
        result_label.config(text=f"{amount:.2f} TRY = {converted_amount:.2f} {selected_currency}")
    except ValueError:
        result_label.config(text="Invalid input!")

# Create the main window
window = tk.Tk()
window.title("Currency Converter")
window.configure(background="#f2f2f2")
window.geometry("300x300")

# Title label
title_label = tk.Label(window, text="Currency Converter", font=("Arial", 20), bg="#f2f2f2", fg="#333333")
title_label.pack(pady=10)

# Amount label and entry
amount_label = tk.Label(window, text="Amount (TRY):", font=("Arial", 12), bg="#f2f2f2", fg="#333333")
amount_label.pack()
amount_entry = tk.Entry(window, font=("Arial", 12))
amount_entry.pack()

# Currency ComboBox
currency_label = tk.Label(window, text="Currency:", font=("Arial", 12), bg="#f2f2f2", fg="#333333")
currency_label.pack()
currency_combobox = ttk.Combobox(window, values=["USD", "UZS", "EUR", "GBP"], font=("Arial", 12))
currency_combobox.pack()

# Convert button
convert_button = tk.Button(window, text="Convert", font=("Arial", 14), bg="#4CAF50", fg="white", relief="raised", command=convert_currency)
convert_button.pack(pady=10)

# Result label
result_label = tk.Label(window, text="", font=("Arial", 12), bg="#f2f2f2", fg="#008000")
result_label.pack()

# Start the main loop
window.mainloop()
