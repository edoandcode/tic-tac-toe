<script setup>
import TTTCell from './Cell/TTTCell.vue'
import './style.css'
</script>

<script>
    import TicTacToe from '@/commons/TicTacToe';

    export default {
        name: 'TicTacToe',
        data() {
            return {
                model: new TicTacToe(3)
            }
        },
        methods: {
            restart() {
                this.model = new TicTacToe(3)
            }
        }
    }
</script>

<template>
    <div class="container">
        <div class="row justify-center">
            <div class="col-8">
                <div class="game-wrapper">
                    <div class="schema">
                        <template 
                            v-for="row in model.size"
                            :key="row"
                        >
                            <template 
                                v-for="cell in model.size"
                                :key="cell"
                            >
                                <TTTCell 
                                    :model="model"
                                    :i="row - 1"
                                    :j="cell - 1"
                                ></TTTCell>
                            </template>
                        </template>
                    </div>
                    <div class="button-wrapper">
                        <button 
                            class="button"
                            v-if="this.model.winner || this.model.isGameOver"
                            @click="restart"
                        >RESTART</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>