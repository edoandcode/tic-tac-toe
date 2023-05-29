<script setup>
import { RouterLink} from 'vue-router'
import './style.css'
</script>

<template>
    <header class="header">
    <div class="container">
      <div class="row">
        <div class="col col-12">
          <nav class="nav">
            <ul>
                <li>
                    <RouterLink to="/">TicTacToe</RouterLink>
                </li>
                <li>
                    <RouterLink to="/about">About</RouterLink>
                </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>