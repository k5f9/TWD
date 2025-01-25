export default defineEventHandler(async (event) => {
    const apiKey = '5f779e50-52b6-42d1-b46c-0916be844ff6'; // Замените на ваш API-ключ
    const url = 'https://api.weather.yandex.ru/v2/forecast';
    const query = getQuery(event); // Извлечение параметров запроса

    try {
        // Запрос к Yandex API
        const response = await $fetch(url, {
            headers: {
                'X-Yandex-Weather-Key': apiKey,
            },
            params: {
                lat: query.lat || 53.3606, // Широта
                lon: query.lon || 83.7636, // Долгота
            },
        });

        return response; // Отправляем данные на клиент
    } catch (error) {
        console.error('Ошибка при запросе к Yandex API:', error);
        throw createError({
            statusCode: 500,
            statusMessage: 'Ошибка сервера при запросе к Yandex API',
        });
    }
});
