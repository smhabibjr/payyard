<template>
  <q-page class="q-ma-md">
    <PageTitle :title="pageTitle" />

    <div class="shadow-up-1 q-mt-sm">
      <div class="q-pa-md">
        <ProfileAvator />
        <h5>counter : {{ counter }}</h5>
      </div>
      <div class="q-pa-md q-gutter-sm">
        <q-btn @click="SelectedElement = 'PersonalData'" label="Personal Data" />
        <q-btn @click="SelectedElement = 'MobileNumber'" label="Mobile Number" />
        <q-btn @click="SelectedElement = 'Email'" label="Email" />
        <q-btn @click="SelectedElement = 'Address'" label="Address" />
        <q-btn @click="SelectedElement = 'ChangeCountry'" label="Change Country" />
        <q-btn @click="SelectedElement = 'IdentityDocuments'" label="Identity Documents" />
        <q-btn @click="SelectedElement = 'ChangePassword'" label="Change Password" />
        <q-btn @click="SelectedElement = 'Preference'" label="Preference" />
        <q-btn @click="SelectedElement = 'DeleteAccount'" label="Delete Account" />
      </div>
      <div class="q-pa-md q-gutter-sm">
        <div v-if="SelectedElement === 'PersonalData'">
          <PersonalData />
        </div>
        <div v-if="SelectedElement === 'MobileNumber'">
          <MobileNumber />
        </div>
        <div v-if="SelectedElement === 'Email'">
          <UserEmail />
        </div>
        <div v-if="SelectedElement === 'Address'">
          <UserAddress />
        </div>
        <div v-if="SelectedElement === 'ChangeCountry'">
          <ChangeCountry />
        </div>
        <div v-if="SelectedElement === 'IdentityDocuments'">
          <IdentityDocuments />
        </div>
        <div v-if="SelectedElement === 'ChangePassword'">
          <ChangePassword />
        </div>
        <div v-if="SelectedElement === 'Preference'">
          <PreferenceNewslater />
        </div>
        <div v-if="SelectedElement === 'DeleteAccount'">
          <DeleteAccount />
        </div>
      </div>
    </div>

  </q-page>
</template>

<script lang="ts">

import { defineComponent, onMounted, ref } from 'vue';
import PageTitle from 'src/components/PageTitle.vue';
import ProfileAvator from 'src/components/ProfileAvator.vue';
import PersonalData from 'src/components/SettingsComponent/PersonalData.vue';
import UserEmail from 'src/components/SettingsComponent/UserEmail.vue';
import MobileNumber from 'src/components/SettingsComponent/MobileNumber.vue';
import UserAddress from 'src/components/SettingsComponent/UserAddress.vue';
import ChangeCountry from 'src/components/SettingsComponent/ChangeCountry.vue';
import IdentityDocuments from 'src/components/SettingsComponent/IdentityDocuments.vue';
import ChangePassword from 'src/components/SettingsComponent/ChangePassword.vue';
import PreferenceNewslater from 'src/components/SettingsComponent/PreferenceNewslater.vue';
import DeleteAccount from 'src/components/SettingsComponent/DeleteAccount.vue';

export default defineComponent({
  name: 'SettingsPage',
  components: {
    PageTitle,
    ProfileAvator,
    PersonalData,
    UserEmail,
    MobileNumber,
    UserAddress,
    ChangeCountry,
    IdentityDocuments,
    ChangePassword,
    PreferenceNewslater,
    DeleteAccount,
  },
  setup() {
    const pageTitle = ref('My Account');
    const SelectedElement = ref('PersonalData');
    const counter = ref(0);
    // eslint-disable-next-line no-plusplus
    const counterIncrementer = () => counter.value++;
    onMounted(() => {
      setInterval(counterIncrementer, 1000);
    });
    return {
      pageTitle,
      SelectedElement,
      counter,
    };
  },
});
</script>

<style scoped>

</style>
