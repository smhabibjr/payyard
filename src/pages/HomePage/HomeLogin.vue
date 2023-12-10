<template>
<q-page
    class="window-height window-width row justify-center items-center gradient__bg"
  >
    <div class="column">
      <div class="row">
        <q-card square dark class="q-pa-md q-ma-none no-shadow bg-grey-10" style="width:400px;">
          <q-card-section>
            <lo-go />
          </q-card-section>
          <q-card-section>
            <q-form class="q-gutter-md">
              <q-input dark dense square filled clearable v-model="email" type="email" label="Email">
                <template v-slot:prepend>
                  <q-icon name="email" />
                </template>
              </q-input>
              <q-input dark dense square filled clearable v-model="password" type="password" label="Password">
                <template v-slot:prepend>
                  <q-icon name="lock" />
                </template>
              </q-input>
            </q-form>
          </q-card-section>
          <q-card-actions>
            <div class="row full-width items-center">
              <div class="col-6">
                <q-btn outline rounded size="md" class="full-width text-white" label="Sign In" />
              </div>
              <div class="col-6">
                <p class="text-no-wrap text-grey text-caption text-right">Forgot password?</p>
              </div>
            </div>
          </q-card-actions>
          <q-card-section>
            <p class="text-caption text-weight-light text-grey">We don't share your email with others.</p>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { ref } from 'vue';
import LoGo from 'src/components/LoGo.vue';

export default {
  components: {
    LoGo,
  },
  setup() {
    const email = ref('');
    const password = ref('');

    const login = () => {
      // Handle login logic here
      console.log('Login clicked');
    };

    return {
      email,
      password,
      login,
      LoGo,
    };
  },
};
</script>

<style>
.logo {
  width: 100px; /* Adjust as needed */
  height: auto;
  margin-bottom: 20px;
}

.login-card {
  max-width: 350px;
  width: 100%;
}
</style>
