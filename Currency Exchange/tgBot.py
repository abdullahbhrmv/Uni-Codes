import logging
import requests
from aiogram import Bot, Dispatcher, types
from aiogram.contrib.fsm_storage.memory import MemoryStorage
from aiogram.dispatcher import FSMContext
from aiogram.dispatcher.filters import Command

# Telegram Bot Token'ınızı buraya ekleyin
TOKEN = '5890129080:AAFy1hzZD4T_S7o_6swsyHK5W55tb540Hco'

# API Base URL
API_BASE_URL = 'https://api.exchangeratesapi.io/latest'

# AIogram logger'ını yapılandırma
logging.basicConfig(level=logging.INFO)

# Bot örneği oluşturma
bot = Bot(token=TOKEN)
storage = MemoryStorage()
dp = Dispatcher(bot, storage=storage)


# /start komutuna tepki verme
@dp.message_handler(commands=['start'])
async def send_welcome(message: types.Message):
    await message.reply("Merhaba! Bu bir Currency Botudur.\n"
                        "Aşağıdaki komutları kullanabilirsiniz:\n"
                        "/currency - Döviz kurlarını gösterir.")


# /currency komutuna tepki verme
@dp.message_handler(commands=['currency'])
async def send_currency(message: types.Message, state: FSMContext):
    # API'ye istek gönderme
    response = requests.get(API_BASE_URL)
    if response.status_code == 200:
        data = response.json()
        if 'rates' in data:
            rates = data['rates']
            uzs = rates['UZS']
            try_ = rates['TRY']

            # Mesajı oluşturma
            text = f"1 USD = {uzs} UZS | {try_} TRY\n" \
                   f"1 EUR = {uzs} UZS | {try_} TRY\n" \
                   f"1 GBP = {uzs} UZS | {try_} TRY\n" \
                   f"1 RUB = {uzs} UZS | {try_} TRY"

            await message.reply(text)
        else:
            await message.reply("Döviz kurları yanıtında 'rates' anahtarı bulunamadı.")
    else:
        await message.reply("Döviz kurları alınamıyor. Lütfen daha sonra tekrar deneyin.")


# Botun çalıştırılması
if __name__ == '__main__':
    from aiogram import executor

    executor.start_polling(dp, skip_updates=True)
