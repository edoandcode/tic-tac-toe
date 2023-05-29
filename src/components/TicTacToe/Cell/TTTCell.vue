<script>
    import TicTacToe from '@/commons/TicTacToe';

    export default {
        props: {
            model: TicTacToe,
            i: Number,
            j: Number 
        },
        data(){
            return {
                hover: false
            }
        },
        computed: {
            symbol() {
                return this.model.schema[this.i][this.j]
            },
            isEmpty() {
                return this.model.isEmpty(this.i, this.j)
            },
            currentPlayer() {
                return this.model.currentPlayer
            },
            winnerPath() {
                return this.model.winnerPath
            }
        },  
        methods: {
            handleClick() {
                this.model.addSymbol(this.i, this.j)
            },
            handleMouseEnter() {
                this.hover = true
            },
            handleMouseLeave(){
                this.hover = false
            }
        }
    }
</script>

<template>
    <div 
        :class="`cell ${winnerPath.some(p => p[0] === i && p[1] === j) ? 'win-cell' : ''}`"
        :style="`flex: 0 0 calc(100%/${this.model.size})`"
        @click="handleClick"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
    >
        <div 
            :class="`cross ${symbol === 1 ? 'active' : ''} ${hover && isEmpty && currentPlayer === 1 ? 'hover' : ''}`"></div>
        <div 
            :class="`circle ${symbol === 2 ? 'active' : ''} ${hover && isEmpty && currentPlayer === 2 ? 'hover' : ''}`"></div>
    </div>
</template>