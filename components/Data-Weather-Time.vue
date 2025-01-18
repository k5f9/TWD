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
                    'opacity-100 scale-y-100 h-[394px] mt-5': state.isTimeVisible,
                }"
                class="bg-[#f2fde7] transition-all duration-500 w-[300px] rounded-[15px]"
            >
                <p id="pt-1" class='px-[102px] py-[150px] font-bold text-2xl'></p>
            </div>
        </div>

        <!-- Вторая кнопка и блок -->
        <div class="flex flex-col items-center">
            <button
                class="bg-[#B0BC98] text-[40px] font-bold w-[300px] h-[56px] item-center rounded-[15px] transform transition-transform duration-200 active:scale-90 hover:scale-105"
                @click="toggleSlide('Weather')"
            >
                Weather
            </button>
            <div
                :class="{
                    'opacity-0 scale-y-0 h-0 mt-0': !state.isWeatherVisible,
                    'opacity-100 scale-y-100 h-[394px] mt-5': state.isWeatherVisible,
                }"
                class="bg-[#e4e8dc] transition-all duration-500 w-[300px] rounded-[15px]"
            >
                <p id="pw-1"></p>
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
                    'opacity-100 scale-y-100 h-[394px] mt-5': state.isDataVisible,
                }"
                class="bg-[#edf5e8] transition-all duration-500 w-[300px] rounded-[15px]"
            >
                <p id="pd-1" class='px-[95px] py-[150px] font-bold text-2xl'></p>
            </div>
        </div>
    </div>
</template>

<script setup lang="js">
import { reactive } from 'vue';


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
    const day = date.getDate().toString();
    const month = date.getMonth()+1;
    const year = date.getFullYear();
    document.getElementById("pt-1").innerHTML = `${hours}:${minutes}:${seconds}`;
    document.getElementById("pd-1").innerHTML = `${day}.${month}.${year}`;
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
