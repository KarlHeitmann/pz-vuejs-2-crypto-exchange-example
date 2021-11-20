new Vue({
  el: '#app',
  data() {
    return {
      title: '',
      time: 0,
      courses: []
    }
  },
  computed: {
    totalTime() {
      const courses_reducer = (sum, course) => sum + course.time;
      return this.courses.length == 0 ? 0 : this.courses.reduce(courses_reducer, 0);

    }
  },
  methods: {
    addCourse() {
      this.courses.push({title: this.title, time: Number(this.time)})
    }
  }
})