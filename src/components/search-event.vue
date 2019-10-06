<template>
  <div>
    <b-form @submit="onSubmit">
      <b-container>
        <b-form-row class="justify-content-center">
          <b-col lg="6" md="12" cols="12">
            <b-form-group
              id="locationInput"
              label="Search:"
              label-for="townSearch"
              description="Enter your town to build a playlist"
              :invalid-feedback="invalidFeedback()"
              :valid-feedback="validFeedback()"
              :state="state"
            >
              <b-form-input
                id="townSearch"
                type="text"
                placeholder="Coolsville"
                v-model="form.location"
                :state="state"
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col lg="6" md="8" cols="12"></b-col>
        </b-form-row>
        <b-form-row class="justify-content-center">
          <b-col lg="6" md="12" cols="12">
            <b-form-group
              id="startSearchDate"
              label="From:"
              lable-for="startDate"
              description="Starting date for search"
            >
              <datepicker
                id="startDate"
                v-model="form.startDate"
                :bootstrapStyling="true"
                class="bg-white"
              ></datepicker>
            </b-form-group>
          </b-col>
          <b-col lg="6" md="12" cols="12">
            <b-form-group
              id="endSearchDate"
              label="To:"
              lable-for="endDate"
              description="End date for search"
              :invalid-feedback="invalidFeedback()"
              :valid-feedback="validFeedback()"
              :state="state"
            >
              <datepicker id="endDate" v-model="form.endDate" :bootstrapStyling="true"></datepicker>
            </b-form-group>
          </b-col>
        </b-form-row>
        <b-row class="justify-content-start">
          <b-col md="8" cols="12">
            <b-button type="submit" variant="primary" v-if="!getLoading">Submit</b-button>
            <b-button variant="primary" disabled v-if="getLoading">
              <b-spinner small type="grow"></b-spinner>Loading...
            </b-button>
          </b-col>
        </b-row>
        <hr />
      </b-container>
    </b-form>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  name: "Search",
  computed: {
    state() {
      return this.form.valid;
    },
    getLoading: function() {
      return this.$store.state.loading;
    }
  },
  data() {
    return {
      form: {
        location: "",
        startDate: new Date(),
        endDate: "",
        valid: null
      }
    };
  },
  methods: {
    invalidFeedback: function() {
      if (this.form.valid == false) {
        return "Can not be blank";
      }
    },
    validFeedback: function() {
      return this.state === true ? "Thank you" : "";
    },
    onSubmit(evt) {
      evt.preventDefault();
      var self = this;
      self.$store.commit("loadingStatus", true);
      self.validate();
      if (self.form.valid) {
        // var url = "http://localhost:3000/events";
        var url = "https://comingupserver.herokuapp.com/events";
        var reqObj = {
          startDate: DateFixer(this.form.startDate),
          endDate: DateFixer(this.form.endDate),
          location: this.form.location
        };
        axios
          .post(url, reqObj)
          .then(function(res) {
            self.$store.commit("change", res.data);
            self.$store.commit("loadingStatus", false);
            self.$router.push({ name: "Events" });
          })
          .catch(function(res) {
            if (res instanceof Error) {
              self.$store.commit("loadingStatus", false);
              self.form.valid = null;
              console.log(res.message);
            }
          });
      } else {
        self.$store.commit("loadingStatus", false);
      }
    },
    validate() {
      var self = this;
      if (
        self.form.location != "" &&
        self.form.startDate != "" &&
        self.form.endDate != ""
      ) {
        self.form.valid = true;
      } else {
        self.form.valid = false;
      }
    }
  }
};
function DateFixer(date) {
  return (date.toISOString().split(".")[0] += "Z");
}
</script>
