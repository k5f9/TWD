<template>
    <div class="flex flex-wrap gap-5 justify-center p-5">
        <!-- Первая кнопка и блок -->
        <div class="flex flex-col items-center">
            <button
                class="bg-[#DBF9B8] text-[40px] font-bold w-[300px] h-[56px] item-center rounded-[15px] transform transition-transform duration-200 active:scale-90 hover:scale-105"
                @click="toggleSlide('Time')"
            >
                Time
            </button>
            <div
                :class="{
                    'opacity-0 scale-y-0 h-0 mt-0': !state.isTimeVisible,
                    'opacity-100 scale-y-100 h-[200px] mt-5': state.isTimeVisible,
                }"
                class="bg-[#f2fde7] transition-all duration-500 w-[300px] rounded-[15px]"
            >
            <div class="py-[60px]">
                <p id="pt-1" class='px-[102px] font-bold text-2xl'></p>
                <p id="pt-2" class='px-[105px] font-medium opacity-60 text-1xl' >UTC+7</p>
            </div>
                
            </div>
        </div>

        <!-- Вторая кнопка и блок -->
        <div class="flex flex-col items-center">
            <button
                class="bg-[#B0BC98] text-[40px] font-bold w-[300px] h-[56px] item-center rounded-[15px] transform transition-transform duration-200 active:scale-90 hover:scale-105"
                @click="Weather"
            >
                Weather
            </button>
            <div
                :class="{
                    'opacity-0 scale-y-0 h-0 mt-0': !state.isWeatherVisible,
                    'opacity-100 scale-y-100 h-[200px] mt-5': state.isWeatherVisible,
                }"
                class="bg-[#e4e8dc] transition-all duration-500 w-[300px] rounded-[15px]"
            >
                <p id="pw-1" class='px-[115px] py-[70px] font-bold text-2xl' >{{ temperature }}°C</p>
            </div>
        </div>

        <!-- Третья кнопка и блок -->
        <div class="flex flex-col items-center">
            <button
                class="bg-[#CAE2BC] text-[40px] font-bold w-[300px] h-[56px] item-center rounded-[15px] transform transition-transform duration-200 active:scale-90 hover:scale-105"
                @click="toggleSlide('Data')"
            >
                Data
            </button>
            <div
                :class="{
                    'opacity-0 scale-y-0 h-0 mt-0': !state.isDataVisible,
                    'opacity-100 scale-y-100 h-[200px] mt-5': state.isDataVisible,
                }"
                class="bg-[#edf5e8] transition-all duration-500 w-[300px] rounded-[15px]"
            >
            <div class="py-[60px]">
                <p id="pd-1" class='px-[84px] font-semibold text-2xl'></p>
                <p id="pd-2" class='px-[84px] font-medium opacity-60 text-2xl'></p>
            </div>
                
            </div>
        </div>
    </div>
</template>

<script setup lang="js">
import { reactive } from 'vue';
import { ref } from 'vue';

const temperature = ref(null); // Температура

async function Weather() {
    state.isWeatherVisible = !state.isWeatherVisible;

    try {
        const response = await fetch('/api/weather?lat=53.3606&lon=83.7636');
        const data = await response.json();

        console.log('Данные ответа:', data);
        temperature.value = data.fact.temp; // Установка температуры
    } catch (error) {
        console.error('Ошибка:', error);
    }
}



const state = reactive({
    isTimeVisible: false,
    isWeatherVisible: false,
    isDataVisible: false,
});

function toggleSlide(block) {
    if (block === 'Time') {
        state.isTimeVisible = !state.isTimeVisible;
    } else if (block === 'Weather') {
        state.isWeatherVisible = !state.isWeatherVisible;
    } else if (block === 'Data') {
        state.isDataVisible = !state.isDataVisible;
    }
}

import { onMounted } from 'vue';

onMounted(() => {
    const timeInterval = setInterval(() => {
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');// Добавляем +1 к месяцу
    let name_month;

    switch(month){
        case "01":
            name_month = "Января";

        case "02":
            name_month = "Февраля";

        case "03":
            name_month = "Марта";

        case "04":
            name_month = "Апреля";

        case "05":
            name_month = "Мая";

        case "06":
            name_month = "Июня";

        case "07":
            name_month = "Июля";

        case "08":
            name_month = "Августа";
        
        case "09":
            name_month = "Сентября";

        case "10":
            name_month = "Октября";

        case "11":
            name_month = "Ноября";

        case "12":
            name_month = "Декабря";

    }

    const year = date.getFullYear();
    document.getElementById("pt-1").innerHTML = `${hours}:${minutes}:${seconds}`;
    document.getElementById("pd-1").innerHTML = `${day} ${name_month}`;
    document.getElementById("pd-2").innerHTML = year;
    }, 1000);

    onUnmounted(() => clearInterval(timeInterval));
});

</script>

<style>
@media (max-width: 768px) {
    .flex {
        flex-direction: column;
        align-items: center;
    }

    .flex > div {
        margin-bottom: 15px;
    }
}
</style>
