<template>
  <div>
    <div id="navbar">
      <div class="box-nav">
        <img
          src="@/assets/logo.png"
          alt=""
          class="icon cursor-pointer"
          @click="$router.push(`/`)"
        />
        <div>
          <ul class="name-site d-none-mobile">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/function/1">Function 1</router-link></li>
            <li><router-link to="/function/2">Function 2</router-link></li>
            <!-- <li><router-link to="/function/3">Function 3</router-link></li> -->
          </ul>
          <el-dropdown trigger="click" class="clickbar">
            <span class="el-dropdown-link">
              <i class="fas fa-bars"></i>
            </span>
            <el-dropdown-menu slot="dropdown" class="custom-menu">
              <el-dropdown-item>
                <router-link to="/">Home</router-link>
              </el-dropdown-item>
              <el-dropdown-item>
                <router-link to="/function/1">Function 1</router-link>
              </el-dropdown-item>
              <el-dropdown-item>
                <router-link to="/function/2">Function 2</router-link>
              </el-dropdown-item>
              <el-dropdown-item>
                <router-link to="/function/3">Function 3</router-link>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>
    <slot />
    <el-backtop class="backtop"></el-backtop>
  </div>
</template>
