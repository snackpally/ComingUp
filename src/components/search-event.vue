<template>
  <div>
    <b-form @submit="onSubmit">
      <b-container>
        <!-- <div class="text-center" v-if="getLoading">
          <b-spinner variant="primary" label="Text Centered"></b-spinner>
        </div>-->
        <!-- <div v-if="!getLoading"> -->
        <b-form-row class="justify-content-center">
          <b-col lg="6" md="12" cols="12">
            <b-form-group
              id="locationInput"
              label="Search:"
              label-for="townSearch"
              description="Enter your town to build a playlist"
              :invalid-feedback="invalidFeedback"
              :valid-feedback="validFeedback"
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
              :invalid-feedback="invalidFeedback"
              :valid-feedback="validFeedback"
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
        <!-- </div> -->
        <hr />
      </b-container>
    </b-form>
    <pre class="m-0">{{ form }}</pre>
    <b-card class="mt-3 mb-2 shadow" header="Search Result:" style="overflow-y:scroll;">
      <Event />
    </b-card>
  </div>
</template>

<script>
import Event from "@/components/event-list.vue";
const axios = require("axios");
export default {
  components: { Event },
  computed: {
    state() {
      return this.form.valid;
    },
    invalidFeedback: function() {
      if (this.form.valid == false) {
        return "Can not be blank";
      }
    },
    validFeedback: function() {
      return this.state === true ? "Thank you" : "";
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
      },
      query: {
        body: ""
      }
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      //Refactor this store value later
      var self = this;
      self.$store.commit("loadingStatus", true);
      self.validate();
      if (self.form.valid) {
        var url = `https://app.ticketmaster.com/discovery/v2/events.json?radius=1000&startDateTime=${DateFixer(
          this.form.startDate
        )}&endDateTime=${DateFixer(this.form.endDate)}&city=${
          this.form.location
        }&apikey=${process.env.VUE_APP_TKAPIKEY}`;
        axios
          .get(url, { timeout: 2000 })
          .then(function(res) {
            if (res.data._embedded == undefined || null) {
              self.query.body = "Sorry, No shows coming to town...";
            } else {
              var _filter = res.data._embedded.events;
              var filter1 = _filter.filter(
                x => x.classifications[0].segment.name == "Music"
              );
              self.$store.commit("change", filter1);
              self.$store.commit("loadingStatus", false);
              self.query.body = filter1;
              self.form.valid = null;
              self.form.location = "";
              self.form.startDate = "";
              self.form.endDate = "";
            }
          })
          .catch(function(res) {
            if (res instanceof Error) {
              //this error handling should be better
              self.$store.commit("loadingStatus", false);
              self.form.valid = null;
              console.log("ERROR", res.message);
            } else {
              console.log(res.data);
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
