<template>
    <div>

    <div id="week">
      <div class="day">
        <div class="rubrik">{{week.Monday}}</div>
        <div class="datum">{{week.moDay}}</div>
        <div v-if="week.moPrint[0]" class="event">
          {{week.moPrint[0].startTime}}
          {{week.moPrint[0].eventName}}
          {{week.moPrint[0].topName}}
          {{week.moPrint[0].subName}}
          {{week.moPrint[0].altSubName}}
          {{week.moPrint[0].endTime}}
        </div>
        <div v-if="week.moPrint[1]" class="event">
          {{week.moPrint[1].startTime}}
          {{week.moPrint[1].eventName}}
          {{week.moPrint[1].topName}}
          {{week.moPrint[1].subName}}
          {{week.moPrint[1].altSubName}}
          {{week.moPrint[1].endTime}}
        </div>
        <div v-if="week.moPrint[2]" class="event">
          {{week.moPrint[2].startTime}}
          {{week.moPrint[2].eventName}}
          {{week.moPrint[2].topName}}
          {{week.moPrint[2].subName}}
          {{week.moPrint[2].altSubName}}
          {{week.moPrint[2].endTime}}
        </div>
        <div v-if="week.moPrint[3]" class="event">
          {{week.moPrint[3].startTime}}
          {{week.moPrint[3].eventName}}
          {{week.moPrint[3].topName}}
          {{week.moPrint[3].subName}}
          {{week.moPrint[3].altSubName}}
          {{week.moPrint[3].endTime}}
        </div>
      </div>
      <div class="day">
        <div class="rubrik">{{week.Tuesday}}</div>
        <div class="datum">{{week.tuDay}}</div>
        <div v-if="week.tuPrint[0]" class="event">
          {{week.tuPrint[0].startTime}}
          {{week.tuPrint[0].eventName}}
          {{week.tuPrint[0].topName}}
          {{week.tuPrint[0].subName}}
          {{week.tuPrint[0].altSubName}}
          {{week.tuPrint[0].endTime}}
        </div>
        <div v-if="week.tuPrint[1]" class="event">
          {{week.tuPrint[1].startTime}}
          {{week.tuPrint[1].eventName}}
          {{week.tuPrint[1].topName}}
          {{week.tuPrint[1].subName}}
          {{week.tuPrint[1].altSubName}}
          {{week.tuPrint[1].endTime}}
        </div>
        <div v-if="week.tuPrint[2]" class="event">
          {{week.tuPrint[2].startTime}}
          {{week.tuPrint[2].eventName}}
          {{week.tuPrint[2].topName}}
          {{week.tuPrint[2].subName}}
          {{week.tuPrint[2].altSubName}}
          {{week.tuPrint[2].endTime}}
        </div>
        <div v-if="week.tuPrint[3]" class="event">
          {{week.tuPrint[3].startTime}}
          {{week.tuPrint[3].eventName}}
          {{week.tuPrint[3].topName}}
          {{week.tuPrint[3].subName}}
          {{week.tuPrint[3].altSubName}}
          {{week.tuPrint[3].endTime}}
        </div>
      </div>
      <div class="day">
        <div class="rubrik">{{week.Wensday}}</div>
        <div class="datum">{{week.weDay}}</div>
        <div v-if="week.wePrint[0]" class="event">
          {{week.wePrint[0].startTime}}
          {{week.wePrint[0].eventName}}
          {{week.wePrint[0].topName}}
          {{week.wePrint[0].subName}}
          {{week.wePrint[0].altSubName}}
          {{week.wePrint[0].endTime}}
        </div>
        <div v-if="week.wePrint[1]" class="event">
          {{week.wePrint[1].startTime}}
          {{week.wePrint[1].eventName}}
          {{week.wePrint[1].topName}}
          {{week.wePrint[1].subName}}
          {{week.wePrint[1].altSubName}}
          {{week.wePrint[1].endTime}}
        </div>
        <div v-if="week.wePrint[2]" class="event">
          {{week.wePrint[2].startTime}}
          {{week.wePrint[2].eventName}}
          {{week.wePrint[2].topName}}
          {{week.wePrint[2].subName}}
          {{week.wePrint[2].altSubName}}
          {{week.wePrint[2].endTime}}
        </div>
        <div v-if="week.wePrint[3]" class="event">
          {{week.wePrint[3].startTime}}
          {{week.wePrint[3].eventName}}
          {{week.wePrint[3].topName}}
          {{week.wePrint[3].subName}}
          {{week.wePrint[3].altSubName}}
          {{week.wePrint[3].endTime}}
        </div>
      </div>
      <div class="day">
        <div class="rubrik">{{week.Thursday}}</div>
        <div class="datum">{{week.thDay}}</div>
        <div v-if="week.thPrint[0]" class="event">
          {{week.thPrint[0].startTime}}
          {{week.thPrint[0].eventName}}
          {{week.thPrint[0].topName}}
          {{week.thPrint[0].subName}}
          {{week.thPrint[0].altSubName}}
          {{week.thPrint[0].endTime}}
        </div>
        <div v-if="week.thPrint[1]" class="event">
          {{week.thPrint[1].startTime}}
          {{week.thPrint[1].eventName}}
          {{week.thPrint[1].topName}}
          {{week.thPrint[1].subName}}
          {{week.thPrint[1].altSubName}}
          {{week.thPrint[1].endTime}}
        </div>
        <div v-if="week.thPrint[2]" class="event">
          {{week.thPrint[2].startTime}}
          {{week.thPrint[2].eventName}}
          {{week.thPrint[2].topName}}
          {{week.thPrint[2].subName}}
          {{week.thPrint[2].altSubName}}
          {{week.thPrint[2].endTime}}
        </div>
        <div v-if="week.thPrint[3]" class="event">
          {{week.thPrint[3].startTime}}
          {{week.thPrint[3].eventName}}
          {{week.thPrint[3].topName}}
          {{week.thPrint[3].subName}}
          {{week.thPrint[3].altSubName}}
          {{week.thPrint[3].endTime}}
        </div>
      </div>
      <div class="day">
        <div class="rubrik">{{week.Friday}}</div>
        <div class="datum">{{week.frDay}}</div>
        <div v-if="week.frPrint[0]" class="event">
          {{week.frPrint[0].startTime}}
          {{week.frPrint[0].eventName}}
          {{week.frPrint[0].topName}}
          {{week.frPrint[0].subName}}
          {{week.frPrint[0].altSubName}}
          {{week.frPrint[0].endTime}}
        </div>
        <div v-if="week.frPrint[1]" class="event">
          {{week.frPrint[1].startTime}}
          {{week.frPrint[1].eventName}}
          {{week.frPrint[1].topName}}
          {{week.frPrint[1].subName}}
          {{week.frPrint[1].altSubName}}
          {{week.frPrint[1].endTime}}
        </div>
        <div v-if="week.frPrint[2]" class="event">
          {{week.frPrint[2].startTime}}
          {{week.frPrint[2].eventName}}
          {{week.frPrint[2].topName}}
          {{week.frPrint[2].subName}}
          {{week.frPrint[2].altSubName}}
          {{week.frPrint[2].endTime}}
        </div>
        <div v-if="week.frPrint[3]" class="event">
          {{week.frPrint[3].startTime}}
          {{week.frPrint[3].eventName}}
          {{week.frPrint[3].topName}}
          {{week.frPrint[3].subName}}
          {{week.frPrint[3].altSubName}}
          {{week.frPrint[3].endTime}}
        </div>
      </div>
      <div class="day">
        <div class="rubrik">{{week.Saturday}}</div>
        <div class="datum">{{week.saDay}}</div>
        <div v-if="week.saPrint[0]" class="event">
          {{week.saPrint[0].startTime}}
          {{week.saPrint[0].eventName}}
          {{week.saPrint[0].topName}}
          {{week.saPrint[0].subName}}
          {{week.saPrint[0].altSubName}}
          {{week.saPrint[0].endTime}}
        </div>
        <div v-if="week.saPrint[1]" class="event">
          {{week.saPrint[1].startTime}}
          {{week.saPrint[1].eventName}}
          {{week.saPrint[1].topName}}
          {{week.saPrint[1].subName}}
          {{week.saPrint[1].altSubName}}
          {{week.saPrint[1].endTime}}
        </div>
        <div v-if="week.saPrint[2]" class="event">
          {{week.saPrint[2].startTime}}
          {{week.saPrint[2].eventName}}
          {{week.saPrint[2].topName}}
          {{week.saPrint[2].subName}}
          {{week.saPrint[2].altSubName}}
          {{week.saPrint[2].endTime}}
        </div>
        <div v-if="week.saPrint[3]" class="event">
          {{week.saPrint[3].startTime}}
          {{week.saPrint[3].eventName}}
          {{week.saPrint[3].topName}}
          {{week.saPrint[3].subName}}
          {{week.saPrint[3].altSubName}}
          {{week.saPrint[3].endTime}}
        </div>
      </div>
      <div class="day">
        <div class="rubrik">{{week.Sunday}}</div>
        <div class="datum">{{week.suDay}}</div>
        <div v-if="week.suPrint[0]" class="event">
          {{week.suPrint[0].startTime}}
          {{week.suPrint[0].eventName}}
          {{week.suPrint[0].topName}}
          {{week.suPrint[0].subName}}
          {{week.suPrint[0].altSubName}}
          {{week.suPrint[0].endTime}}
        </div>
        <div v-if="week.suPrint[1]" class="event">
          {{week.suPrint[1].startTime}}
          {{week.suPrint[1].eventName}}
          {{week.suPrint[1].topName}}
          {{week.suPrint[1].subName}}
          {{week.suPrint[1].altSubName}}
          {{week.suPrint[1].endTime}}
        </div>
        <div v-if="week.suPrint[2]" class="event">
          {{week.suPrint[2].startTime}}
          {{week.suPrint[2].eventName}}
          {{week.suPrint[2].topName}}
          {{week.suPrint[2].subName}}
          {{week.suPrint[2].altSubName}}
          {{week.suPrint[2].endTime}}
        </div>
        <div v-if="week.suPrint[3]" class="event">
          {{week.suPrint[3].startTime}}
          {{week.suPrint[3].eventName}}
          {{week.suPrint[3].topName}}
          {{week.suPrint[3].subName}}
          {{week.suPrint[3].altSubName}}
          {{week.suPrint[3].endTime}}
        </div>
      </div>
    </div>

    <div id="nextWeek">
      <div class="day">
        <div class="rubrik">{{nextWeek.Monday}}</div>
        <div class="datum">{{nextWeek.moDay}}</div>
        <div v-if="nextWeek.moPrint[0]" class="event">
          {{nextWeek.moPrint[0].startTime}}
          {{nextWeek.moPrint[0].eventName}}
          {{nextWeek.moPrint[0].topName}}
          {{nextWeek.moPrint[0].subName}}
          {{nextWeek.moPrint[0].altSubName}}
          {{nextWeek.moPrint[0].endTime}}
        </div>
        <div v-if="nextWeek.moPrint[1]" class="event">
          {{nextWeek.moPrint[1].startTime}}
          {{nextWeek.moPrint[1].eventName}}
          {{nextWeek.moPrint[1].topName}}
          {{nextWeek.moPrint[1].subName}}
          {{nextWeek.moPrint[1].altSubName}}
          {{nextWeek.moPrint[1].endTime}}
        </div>
        <div v-if="nextWeek.moPrint[2]" class="event">
          {{nextWeek.moPrint[2].startTime}}
          {{nextWeek.moPrint[2].eventName}}
          {{nextWeek.moPrint[2].topName}}
          {{nextWeek.moPrint[2].subName}}
          {{nextWeek.moPrint[2].altSubName}}
          {{nextWeek.moPrint[2].endTime}}
        </div>
        <div v-if="nextWeek.moPrint[3]" class="event">
          {{nextWeek.moPrint[3].startTime}}
          {{nextWeek.moPrint[3].eventName}}
          {{nextWeek.moPrint[3].topName}}
          {{nextWeek.moPrint[3].subName}}
          {{nextWeek.moPrint[3].altSubName}}
          {{nextWeek.moPrint[3].endTime}}
        </div>
      </div>
      <div class="day">
        <div class="rubrik">{{nextWeek.Tuesday}}</div>
        <div class="datum">{{nextWeek.tuDay}}</div>
        <div v-if="nextWeek.tuPrint[0]" class="event">
          {{nextWeek.tuPrint[0].startTime}}
          {{nextWeek.tuPrint[0].eventName}}
          {{nextWeek.tuPrint[0].topName}}
          {{nextWeek.tuPrint[0].subName}}
          {{nextWeek.tuPrint[0].altSubName}}
          {{nextWeek.tuPrint[0].endTime}}
        </div>
        <div v-if="nextWeek.tuPrint[1]" class="event">
          {{nextWeek.tuPrint[1].startTime}}
          {{nextWeek.tuPrint[1].eventName}}
          {{nextWeek.tuPrint[1].topName}}
          {{nextWeek.tuPrint[1].subName}}
          {{nextWeek.tuPrint[1].altSubName}}
          {{nextWeek.tuPrint[1].endTime}}
        </div>
        <div v-if="nextWeek.tuPrint[2]" class="event">
          {{nextWeek.tuPrint[2].startTime}}
          {{nextWeek.tuPrint[2].eventName}}
          {{nextWeek.tuPrint[2].topName}}
          {{nextWeek.tuPrint[2].subName}}
          {{nextWeek.tuPrint[2].altSubName}}
          {{nextWeek.tuPrint[2].endTime}}
        </div>
        <div v-if="nextWeek.tuPrint[3]" class="event">
          {{nextWeek.tuPrint[3].startTime}}
          {{nextWeek.tuPrint[3].eventName}}
          {{nextWeek.tuPrint[3].topName}}
          {{nextWeek.tuPrint[3].subName}}
          {{nextWeek.tuPrint[3].altSubName}}
          {{nextWeek.tuPrint[3].endTime}}
        </div>
      </div>
      <div class="day">
        <div class="rubrik">{{nextWeek.Wensday}}</div>
        <div class="datum">{{nextWeek.weDay}}</div>
        <div v-if="nextWeek.wePrint[0]" class="event">
          {{nextWeek.wePrint[0].startTime}}
          {{nextWeek.wePrint[0].eventName}}
          {{nextWeek.wePrint[0].topName}}
          {{nextWeek.wePrint[0].subName}}
          {{nextWeek.wePrint[0].altSubName}}
          {{nextWeek.wePrint[0].endTime}}
        </div>
        <div v-if="nextWeek.wePrint[1]" class="event">
          {{nextWeek.wePrint[1].startTime}}
          {{nextWeek.wePrint[1].eventName}}
          {{nextWeek.wePrint[1].topName}}
          {{nextWeek.wePrint[1].subName}}
          {{nextWeek.wePrint[1].altSubName}}
          {{nextWeek.wePrint[1].endTime}}
        </div>
        <div v-if="nextWeek.wePrint[2]" class="event">
          {{nextWeek.wePrint[2].startTime}}
          {{nextWeek.wePrint[2].eventName}}
          {{nextWeek.wePrint[2].topName}}
          {{nextWeek.wePrint[2].subName}}
          {{nextWeek.wePrint[2].altSubName}}
          {{nextWeek.wePrint[2].endTime}}
        </div>
        <div v-if="nextWeek.wePrint[3]" class="event">
          {{nextWeek.wePrint[3].startTime}}
          {{nextWeek.wePrint[3].eventName}}
          {{nextWeek.wePrint[3].topName}}
          {{nextWeek.wePrint[3].subName}}
          {{nextWeek.wePrint[3].altSubName}}
          {{nextWeek.wePrint[3].endTime}}
        </div>
      </div>
      <div class="day">
        <div class="rubrik">{{nextWeek.Thursday}}</div>
        <div class="datum">{{nextWeek.thDay}}</div>
        <div v-if="nextWeek.thPrint[0]" class="event">
          {{nextWeek.thPrint[0].startTime}}
          {{nextWeek.thPrint[0].eventName}}
          {{nextWeek.thPrint[0].topName}}
          {{nextWeek.thPrint[0].subName}}
          {{nextWeek.thPrint[0].altSubName}}
          {{nextWeek.thPrint[0].endTime}}
        </div>
        <div v-if="nextWeek.thPrint[1]" class="event">
          {{nextWeek.thPrint[1].startTime}}
          {{nextWeek.thPrint[1].eventName}}
          {{nextWeek.thPrint[1].topName}}
          {{nextWeek.thPrint[1].subName}}
          {{nextWeek.thPrint[1].altSubName}}
          {{nextWeek.thPrint[1].endTime}}
        </div>
        <div v-if="nextWeek.thPrint[2]" class="event">
          {{nextWeek.thPrint[2].startTime}}
          {{nextWeek.thPrint[2].eventName}}
          {{nextWeek.thPrint[2].topName}}
          {{nextWeek.thPrint[2].subName}}
          {{nextWeek.thPrint[2].altSubName}}
          {{nextWeek.thPrint[2].endTime}}
        </div>
        <div v-if="nextWeek.thPrint[3]" class="event">
          {{nextWeek.thPrint[3].startTime}}
          {{nextWeek.thPrint[3].eventName}}
          {{nextWeek.thPrint[3].topName}}
          {{nextWeek.thPrint[3].subName}}
          {{nextWeek.thPrint[3].altSubName}}
          {{nextWeek.thPrint[3].endTime}}
        </div>
      </div>
      <div class="day">
        <div class="rubrik">{{nextWeek.Friday}}</div>
        <div class="datum">{{nextWeek.frDay}}</div>
        <div v-if="nextWeek.frPrint[0]" class="event">
          {{nextWeek.frPrint[0].startTime}}
          {{nextWeek.frPrint[0].eventName}}
          {{nextWeek.frPrint[0].topName}}
          {{nextWeek.frPrint[0].subName}}
          {{nextWeek.frPrint[0].altSubName}}
          {{nextWeek.frPrint[0].endTime}}
        </div>
        <div v-if="nextWeek.frPrint[1]" class="event">
          {{nextWeek.frPrint[1].startTime}}
          {{nextWeek.frPrint[1].eventName}}
          {{nextWeek.frPrint[1].topName}}
          {{nextWeek.frPrint[1].subName}}
          {{nextWeek.frPrint[1].altSubName}}
          {{nextWeek.frPrint[1].endTime}}
        </div>
        <div v-if="nextWeek.frPrint[2]" class="event">
          {{nextWeek.frPrint[2].startTime}}
          {{nextWeek.frPrint[2].eventName}}
          {{nextWeek.frPrint[2].topName}}
          {{nextWeek.frPrint[2].subName}}
          {{nextWeek.frPrint[2].altSubName}}
          {{nextWeek.frPrint[2].endTime}}
        </div>
        <div v-if="nextWeek.frPrint[3]" class="event">
          {{nextWeek.frPrint[3].startTime}}
          {{nextWeek.frPrint[3].eventName}}
          {{nextWeek.frPrint[3].topName}}
          {{nextWeek.frPrint[3].subName}}
          {{nextWeek.frPrint[3].altSubName}}
          {{nextWeek.frPrint[3].endTime}}
        </div>
      </div>
      <div class="day">
        <div class="rubrik">{{nextWeek.Saturday}}</div>
        <div class="datum">{{nextWeek.saDay}}</div>
        <div v-if="nextWeek.saPrint[0]" class="event">
          {{nextWeek.saPrint[0].startTime}}
          {{nextWeek.saPrint[0].eventName}}
          {{nextWeek.saPrint[0].topName}}
          {{nextWeek.saPrint[0].subName}}
          {{nextWeek.saPrint[0].altSubName}}
          {{nextWeek.saPrint[0].endTime}}
        </div>
        <div v-if="nextWeek.saPrint[1]" class="event">
          {{nextWeek.saPrint[1].startTime}}
          {{nextWeek.saPrint[1].eventName}}
          {{nextWeek.saPrint[1].topName}}
          {{nextWeek.saPrint[1].subName}}
          {{nextWeek.saPrint[1].altSubName}}
          {{nextWeek.saPrint[1].endTime}}
        </div>
        <div v-if="nextWeek.saPrint[2]" class="event">
          {{nextWeek.saPrint[2].startTime}}
          {{nextWeek.saPrint[2].eventName}}
          {{nextWeek.saPrint[2].topName}}
          {{nextWeek.saPrint[2].subName}}
          {{nextWeek.saPrint[2].altSubName}}
          {{nextWeek.saPrint[2].endTime}}
        </div>
        <div v-if="nextWeek.saPrint[3]" class="event">
          {{nextWeek.saPrint[3].startTime}}
          {{nextWeek.saPrint[3].eventName}}
          {{nextWeek.saPrint[3].topName}}
          {{nextWeek.saPrint[3].subName}}
          {{nextWeek.saPrint[3].altSubName}}
          {{nextWeek.saPrint[3].endTime}}
        </div>
      </div>
      <div class="day">
        <div class="rubrik">{{nextWeek.Sunday}}</div>
        <div class="datum">{{nextWeek.suDay}}</div>
        <div v-if="nextWeek.suPrint[0]" class="event">
          {{nextWeek.suPrint[0].startTime}}
          {{nextWeek.suPrint[0].eventName}}
          {{nextWeek.suPrint[0].topName}}
          {{nextWeek.suPrint[0].subName}}
          {{nextWeek.suPrint[0].altSubName}}
          {{nextWeek.suPrint[0].endTime}}
        </div>
        <div v-if="nextWeek.suPrint[1]" class="event">
          {{nextWeek.suPrint[1].startTime}}
          {{nextWeek.suPrint[1].eventName}}
          {{nextWeek.suPrint[1].topName}}
          {{nextWeek.suPrint[1].subName}}
          {{nextWeek.suPrint[1].altSubName}}
          {{nextWeek.suPrint[1].endTime}}
        </div>
        <div v-if="nextWeek.suPrint[2]" class="event">
          {{nextWeek.suPrint[2].startTime}}
          {{nextWeek.suPrint[2].eventName}}
          {{nextWeek.suPrint[2].topName}}
          {{nextWeek.suPrint[2].subName}}
          {{nextWeek.suPrint[2].altSubName}}
          {{nextWeek.suPrint[2].endTime}}
        </div>
        <div v-if="nextWeek.suPrint[3]" class="event">
          {{nextWeek.suPrint[3].startTime}}
          {{nextWeek.suPrint[3].eventName}}
          {{nextWeek.suPrint[3].topName}}
          {{nextWeek.suPrint[3].subName}}
          {{nextWeek.suPrint[3].altSubName}}
          {{nextWeek.suPrint[3].endTime}}
        </div>
      </div>
    </div>
    <div>
      <div>
        <label for="createdByWho">Öppna schema, skapad av: (namn)</label>
        <input type="text" name="createdByWho" v-model="createdByWho">
        <input type="button" id="ladda" value="öppna schema" v-on:click="byWhoAndDate()">
      </div>
      <div>
        <label for="createdByWho">Öppna schema, Class: (namn)</label>
        <input type="text" name="createdByClass" v-model="createdByClass">
        <input type="button" id="ladda" value="öppna schema" v-on:click="byClassAndDate()">
      </div>
    </div>
    </div>
</template>

<script>
import moment from 'moment'
var baseServerUrl = 'http://localhost:3000';
export default {
        name: 'eventPage',
  created() {
    let whatDay = moment().format('dddd')
    let whatDate = moment().format('YYYY-MM-DD')
    if (whatDay === 'Monday') {
      this.week.moDay = whatDate
      this.week.tuDay = moment().add(1, "days").format('YYYY-MM-DD')
      this.week.weDay = moment().add(2, "days").format('YYYY-MM-DD')
      this.week.thDay = moment().add(3, "days").format('YYYY-MM-DD')
      this.week.frDay = moment().add(4, "days").format('YYYY-MM-DD')
      this.week.saDay = moment().add(5, "days").format('YYYY-MM-DD')
      this.week.suDay = moment().add(6, "days").format('YYYY-MM-DD')
      this.nextWeek.moDay = moment().add(7, "days").format('YYYY-MM-DD')
      this.nextWeek.tuDay = moment().add(8, "days").format('YYYY-MM-DD')
      this.nextWeek.weDay = moment().add(9, "days").format('YYYY-MM-DD')
      this.nextWeek.thDay = moment().add(10, "days").format('YYYY-MM-DD')
      this.nextWeek.frDay = moment().add(11, "days").format('YYYY-MM-DD')
      this.nextWeek.saDay = moment().add(12, "days").format('YYYY-MM-DD')
      this.nextWeek.suDay = moment().add(13, "days").format('YYYY-MM-DD')
    } else
    if (whatDay === 'Tuesday') {
      this.week.moDay = moment().subtract(1, "days").format('YYYY-MM-DD')
      this.week.tuDay = whatDate
      this.week.weDay = moment().add(1, "days").format('YYYY-MM-DD')
      this.week.thDay = moment().add(2, "days").format('YYYY-MM-DD')
      this.week.frDay = moment().add(3, "days").format('YYYY-MM-DD')
      this.week.saDay = moment().add(4, "days").format('YYYY-MM-DD')
      this.week.suDay = moment().add(5, "days").format('YYYY-MM-DD')
      this.nextWeek.moDay = moment().add(6, "days").format('YYYY-MM-DD')
      this.nextWeek.tuDay = moment().add(7, "days").format('YYYY-MM-DD')
      this.nextWeek.weDay = moment().add(8, "days").format('YYYY-MM-DD')
      this.nextWeek.thDay = moment().add(9, "days").format('YYYY-MM-DD')
      this.nextWeek.frDay = moment().add(10, "days").format('YYYY-MM-DD')
      this.nextWeek.saDay = moment().add(11, "days").format('YYYY-MM-DD')
      this.nextWeek.suDay = moment().add(12, "days").format('YYYY-MM-DD')
    } else if (whatDay === 'Wednesday') {
      this.week.tuDay = moment().subtract(2, "days").format('YYYY-MM-DD')
      this.week.moDay = moment().subtract(1, "days").format('YYYY-MM-DD')
      this.week.weDay = whatDate
      this.week.thDay = moment().add(1, "days").format('YYYY-MM-DD')
      this.week.frDay = moment().add(2, "days").format('YYYY-MM-DD')
      this.week.saDay = moment().add(3, "days").format('YYYY-MM-DD')
      this.week.suDay = moment().add(4, "days").format('YYYY-MM-DD')
      this.nextWeek.moDay = moment().add(5, "days").format('YYYY-MM-DD')
      this.nextWeek.tuDay = moment().add(6, "days").format('YYYY-MM-DD')
      this.nextWeek.weDay = moment().add(7, "days").format('YYYY-MM-DD')
      this.nextWeek.thDay = moment().add(8, "days").format('YYYY-MM-DD')
      this.nextWeek.frDay = moment().add(9, "days").format('YYYY-MM-DD')
      this.nextWeek.saDay = moment().add(10, "days").format('YYYY-MM-DD')
      this.nextWeek.suDay = moment().add(11, "days").format('YYYY-MM-DD')
    } else if (whatDay === 'Thursday') {
      this.week.moDay = moment().subtract(3, "days").format('YYYY-MM-DD')
      this.week.tuDay = moment().subtract(2, "days").format('YYYY-MM-DD')
      this.week.weDay = moment().subtract(1, "days").format('YYYY-MM-DD')
      this.week.thDay = whatDate
      this.week.frDay = moment().add(1, "days").format('YYYY-MM-DD')
      this.week.saDay = moment().add(2, "days").format('YYYY-MM-DD')
      this.week.suDay = moment().add(3, "days").format('YYYY-MM-DD')
      this.nextWeek.moDay = moment().add(4, "days").format('YYYY-MM-DD')
      this.nextWeek.tuDay = moment().add(5, "days").format('YYYY-MM-DD')
      this.nextWeek.weDay = moment().add(6, "days").format('YYYY-MM-DD')
      this.nextWeek.thDay = moment().add(7, "days").format('YYYY-MM-DD')
      this.nextWeek.frDay = moment().add(8, "days").format('YYYY-MM-DD')
      this.nextWeek.saDay = moment().add(9, "days").format('YYYY-MM-DD')
      this.nextWeek.suDay = moment().add(10, "days").format('YYYY-MM-DD')
    } else if (whatDay === 'Friday') {
      this.week.moDay = moment().subtract(4, "days").format('YYYY-MM-DD')
      this.week.tuDay = moment().subtract(3, "days").format('YYYY-MM-DD')
      this.week.weDay = moment().subtract(2, "days").format('YYYY-MM-DD')
      this.week.thDay = moment().subtract(1, "days").format('YYYY-MM-DD')
      this.week.frDay = whatDate
      this.week.saDay = moment().add(1, "days").format('YYYY-MM-DD')
      this.week.suDay = moment().add(2, "days").format('YYYY-MM-DD')
      this.nextWeek.moDay = moment().add(3, "days").format('YYYY-MM-DD')
      this.nextWeek.tuDay = moment().add(4, "days").format('YYYY-MM-DD')
      this.nextWeek.weDay = moment().add(5, "days").format('YYYY-MM-DD')
      this.nextWeek.thDay = moment().add(6, "days").format('YYYY-MM-DD')
      this.nextWeek.frDay = moment().add(7, "days").format('YYYY-MM-DD')
      this.nextWeek.saDay = moment().add(8, "days").format('YYYY-MM-DD')
      this.nextWeek.suDay = moment().add(9, "days").format('YYYY-MM-DD')
    } else if (whatDay === 'Saturday') {
      this.week.moDay = moment().subtract(5, "days").format('YYYY-MM-DD')
      this.week.tuDay = moment().subtract(4, "days").format('YYYY-MM-DD')
      this.week.weDay = moment().subtract(3, "days").format('YYYY-MM-DD')
      this.week.thDay = moment().subtract(2, "days").format('YYYY-MM-DD')
      this.week.frDay = moment().subtract(1, "days").format('YYYY-MM-DD')
      this.week.saDay = whatDate
      this.week.suDay = moment().add(1, "days").format('YYYY-MM-DD')
      this.nextWeek.moDay = moment().add(2, "days").format('YYYY-MM-DD')
      this.nextWeek.tuDay = moment().add(3, "days").format('YYYY-MM-DD')
      this.nextWeek.weDay = moment().add(4, "days").format('YYYY-MM-DD')
      this.nextWeek.thDay = moment().add(5, "days").format('YYYY-MM-DD')
      this.nextWeek.frDay = moment().add(6, "days").format('YYYY-MM-DD')
      this.nextWeek.saDay = moment().add(7, "days").format('YYYY-MM-DD')
      this.nextWeek.suDay = moment().add(8, "days").format('YYYY-MM-DD')
    } else if (whatDay === 'Sunday') {
      this.week.moDay = moment().subtract(6, "days").format('YYYY-MM-DD')
      this.week.tuDay = moment().subtract(5, "days").format('YYYY-MM-DD')
      this.week.weDay = moment().subtract(4, "days").format('YYYY-MM-DD')
      this.week.thDay = moment().subtract(3, "days").format('YYYY-MM-DD')
      this.week.frDay = moment().subtract(2, "days").format('YYYY-MM-DD')
      this.week.saDay = moment().subtract(1, "days").format('YYYY-MM-DD')
      this.week.suDay = whatDate
      this.nextWeek.moDay = moment().add(1, "days").format('YYYY-MM-DD')
      this.nextWeek.tuDay = moment().add(2, "days").format('YYYY-MM-DD')
      this.nextWeek.weDay = moment().add(3, "days").format('YYYY-MM-DD')
      this.nextWeek.thDay = moment().add(4, "days").format('YYYY-MM-DD')
      this.nextWeek.frDay = moment().add(5, "days").format('YYYY-MM-DD')
      this.nextWeek.saDay = moment().add(6, "days").format('YYYY-MM-DD')
      this.nextWeek.suDay = moment().add(7, "days").format('YYYY-MM-DD')
    }
  },
  data(){
    return{
      date: null,
      startTime: null,
      endTime: null,
      topName: null,
      subName: null,
      altSubName: null,
      eventName: null,
      createdBy: null,
      createdByWho: null,
      createdByClass: null,
      test: null,
      week: {
        Monday: 'Måndag',
        moDay: null,
        moPrint: [{}],
        Tuesday: 'Tisdag',
        tuDay: null,
        tuPrint: [{}],
        Wensday: 'Onsdag',
        weDay: null,
        wePrint: [{}],
        Thursday: 'Torsdag',
        thDday: null,
        thPrint: [{}],
        Friday: 'Fredag',
        frDay: null,
        frPrint: [{}],
        Saturday: 'Lördag',
        saDay: null,
        saPrint: [{}],
        Sunday: 'Söndag',
        suDay: null,
        suPrint: [{}],
      },
      nextWeek: {
        Monday: 'Måndag',
        moDay: null,
        moPrint: [{}],
        Tuesday: 'Tisdag',
        tuDay: null,
        tuPrint: [{}],
        Wensday: 'Onsdag',
        weDay: null,
        wePrint: [{}],
        Thursday: 'Torsdag',
        thDday: null,
        thPrint: [{}],
        Friday: 'Fredag',
        frDay: null,
        frPrint: [{}],
        Saturday: 'Lördag',
        saDay: null,
        saPrint: [{}],
        Sunday: 'Söndag',
        suDay: null,
        suPrint: [{}],
      }
    }
  },
  methods: {
    addToSchedule() {
      fetch(baseServerUrl+'/admin/getSchema', {
        body: '{  "date": "' + this.date + '", "startTime": "' + this.startTime + '", "endTime": "' + this.endTime + '", "topName": "' + this.topName + '", "subName": "' + this.subName + '", "altSubName": "' + this.altSubName + '", "eventName": "' + this.eventName + '", "createdBy": "' + this.createdBy + '" }',
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      }).then(function (response) {
        return response.json()
      }).then(function (reasult) {
        console.log('added to schedule')
      })
    },
    byWhoAndDate() {
      //thisweek
      fetch(baseServerUrl+'/admin/getSchema/byWhoAndDate/' + this.week.moDay + '/' + this.createdByWho)
        .then(response => response.json())
        .then(result => {
          this.week.moPrint = result
        })
      fetch(baseServerUrl+'/admin/getSchema/byWhoAndDate/' + this.week.tuDay + '/' + this.createdByWho)
        .then(response => response.json())
        .then(result => {
          this.week.tuPrint = result
        })
      fetch(baseServerUrl+'/admin/getSchema/byWhoAndDate/' + this.week.weDay + '/' + this.createdByWho)
        .then(response => response.json())
        .then(result => {
          this.week.wePrint = result
        })
      fetch(baseServerUrl+'/admin/getSchema/byWhoAndDate/' + this.week.thDay + '/' + this.createdByWho)
        .then(response => response.json())
        .then(result => {
          this.week.thPrint = result
        })
      fetch(baseServerUrl+'/admin/getSchema/byWhoAndDate/' + this.week.frDay + '/' + this.createdByWho)
        .then(response => response.json())
        .then(result => {
          this.week.frPrint = result
        })
      fetch(baseServerUrl+'/admin/getSchema/byWhoAndDate/' + this.week.saDay + '/' + this.createdByWho)
        .then(response => response.json())
        .then(result => {
          this.week.saPrint = result
        })
      fetch(baseServerUrl+'/admin/getSchema/byWhoAndDate/' + this.week.suDay + '/' + this.createdByWho)
        .then(response => response.json())
        .then(result => {
          this.week.suPrint = result
        })
      //nextweek
      fetch(baseServerUrl+'/admin/getSchema/byWhoAndDate/' + this.nextWeek.moDay + '/' + this.createdByWho)
        .then(response => response.json())
        .then(result => {
          this.nextWeek.moPrint = result
        })
      fetch(baseServerUrl+'/admin/getSchema/byWhoAndDate/' + this.nextWeek.tuDay + '/' + this.createdByWho)
        .then(response => response.json())
        .then(result => {
          this.nextWeek.tuPrint = result
        })
      fetch(baseServerUrl+'/admin/getSchema/byWhoAndDate/' + this.nextWeek.weDay + '/' + this.createdByWho)
        .then(response => response.json())
        .then(result => {
          this.nextWeek.wePrint = result
        })
      fetch(baseServerUrl+'/admin/getSchema/byWhoAndDate/' + this.nextWeek.thDay + '/' + this.createdByWho)
        .then(response => response.json())
        .then(result => {
          this.nextWeek.thPrint = result
        })
      fetch(baseServerUrl+'/admin/getSchema/byWhoAndDate/' + this.nextWeek.frDay + '/' + this.createdByWho)
        .then(response => response.json())
        .then(result => {
          this.nextWeek.frPrint = result
        })
      fetch(baseServerUrl+'/admin/getSchema/byWhoAndDate/' + this.nextWeek.saDay + '/' + this.createdByWho)
        .then(response => response.json())
        .then(result => {
          this.nextWeek.saPrint = result
        })
      fetch(baseServerUrl+'/admin/getSchema/byWhoAndDate/' + this.nextWeek.suDay + '/' + this.createdByWho)
        .then(response => response.json())
        .then(result => {
          this.nextWeek.suPrint = result
        })
    },
    byClassAndDate() {
      //thisweek
      fetch(baseServerUrl+'/admin/getSchema/byClassAndDate/' + this.week.moDay + '/' + this.createdByClass)
        .then(response => response.json())
        .then(result => {
          this.week.moPrint = result
        })
      fetch(baseServerUrl+'/admin/getSchema/byClassAndDate/' + this.week.tuDay + '/' + this.createdByClass)
        .then(response => response.json())
        .then(result => {
          this.week.tuPrint = result
        })
      fetch(baseServerUrl+'/admin/getSchema/byClassAndDate/' + this.week.weDay + '/' + this.createdByClass)
        .then(response => response.json())
        .then(result => {
          this.week.wePrint = result
        })
      fetch(baseServerUrl+'/admin/getSchema/byClassAndDate/' + this.week.thDay + '/' + this.createdByClass)
        .then(response => response.json())
        .then(result => {
          this.week.thPrint = result
        })
      fetch(baseServerUrl+'/admin/getSchema/byClassAndDate/' + this.week.frDay + '/' + this.createdByClass)
        .then(response => response.json())
        .then(result => {
          this.week.frPrint = result
        })
      fetch(baseServerUrl+'/admin/getSchema/byClassAndDate/' + this.week.saDay + '/' + this.createdByClass)
        .then(response => response.json())
        .then(result => {
          this.week.saPrint = result
        })
      fetch(baseServerUrl+'/admin/getSchema/byClassAndDate/' + this.week.suDay + '/' + this.createdByClass)
        .then(response => response.json())
        .then(result => {
          this.week.suPrint = result
        })
      //nextweek
      fetch(baseServerUrl+'/admin/getSchema/byClassAndDate/' + this.nextWeek.moDay + '/' + this.createdByClass)
        .then(response => response.json())
        .then(result => {
          this.nextWeek.moPrint = result
        })
      fetch(baseServerUrl+'/admin/getSchema/byClassAndDate/' + this.nextWeek.tuDay + '/' + this.createdByClass)
        .then(response => response.json())
        .then(result => {
          this.nextWeek.tuPrint = result
        })
      fetch(baseServerUrl+'/admin/getSchema/byClassAndDate/' + this.nextWeek.weDay + '/' + this.createdByClass)
        .then(response => response.json())
        .then(result => {
          this.nextWeek.wePrint = result
        })
      fetch(baseServerUrl+'/admin/getSchema/byClassAndDate/' + this.nextWeek.thDay + '/' + this.createdByClass)
        .then(response => response.json())
        .then(result => {
          this.nextWeek.thPrint = result
        })
      fetch(baseServerUrl+'/admin/getSchema/byClassAndDate/' + this.nextWeek.frDay + '/' + this.createdByClass)
        .then(response => response.json())
        .then(result => {
          this.nextWeek.frPrint = result
        })
      fetch(baseServerUrl+'/admin/getSchema/byClassAndDate/' + this.nextWeek.saDay + '/' + this.createdByClass)
        .then(response => response.json())
        .then(result => {
          this.nextWeek.saPrint = result
        })
      fetch(baseServerUrl+'/admin/getSchema/byClassAndDate/' + this.nextWeek.suDay + '/' + this.createdByClass)
        .then(response => response.json())
        .then(result => {
          this.nextWeek.suPrint = result
        })
    },
  },
}
</script>

<style scoped="">
html {
    background-color: silver;
    text-align: center;
}
#week {
    display: inline-block;
}
.day {
    background-color: white;
    width: 150px;
    height: 400px;
    border: solid 1px #000000;
    float: left;
}
.rubrik {
    width: 100%;
    height: 20px;
    background-color: darkturquoise;
}
.datum {
    width: 100%;
    height: 20px;
    background-color: darkturquoise;
    margin-bottom: 10px;
}
.event {
    background-color: chartreuse;
    margin-bottom: 10px;
}
.tidinput {
    width: 60px;
}
</style>
