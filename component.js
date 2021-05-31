
    Vue.component('jinyoung', {
        template: `
            <div>
                <p>{{currentWord}}</p>
                <form v-on:submit="onSubmitForm">
                    <input type="text" v-model="answerText" ref="input">
                    <button type="submit">입력!</button>
                </form>
                <p style="color: skyblue">{{msg}}</p>
            </div>
        `,
        props: ['sword'],
        data() {
            return {
                currentWord: this.sword,
                answerText:'',
                msg:''
            }
        },
        methods: {
            onSubmitForm(e) {
                e.preventDefault();
				if(this.answerText.length > 0 && this.currentWord[this.currentWord.length - 1] === this.answerText[0]){
                    this.msg = "굿굿";
                    this.currentWord = this.answerText;
                }
                else{
                    this.msg = "땡~";
				}
                this.$refs.input.select();
            }
        }
    })

    new Vue({
        el : '#app',
		data: {
			title: '끝말 잇기',
		}
    });
