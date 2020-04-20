<template>
    <section class="block">
        <b-field grouped >
            <b-field>
                <b-autocomplete placeholder="Player"
                    icon-pack="fas"
                    clearable
                    icon="user"
                    :data="filteredFriends"
                    v-model="dataName"
                    ref="autocomplete"
                    field="name"
                    @select=" option => $emit('input', option)">
                    <template slot="header">
                        <a @click="showAddFriend">
                            <span> Add new... </span>
                        </a> 
                    </template>
                    <template slot="empty">No results for {{dataName}}</template>
                </b-autocomplete>
            </b-field>
        </b-field>
    </section>
</template>

<script>
export default {
    props: ['value','friendList'],
    data(){
        return{
            dataName:''
        }
    },
    computed:{
        filteredFriends(){
            return this.friendList.filter ( option => {
                return option.name
                    .toString()
                    .toLowerCase()
                    .includes(this.dataName.toLowerCase())
            })
        }
    },   // computed
    methods: {
        showAddFriend() {
            this.$buefy.dialog.prompt({
                message: `Add a new friend`,
                inputAttrs: {
                    placeholder: 'Name',
                    maxlength: 50,
                    value: this.dataName
                },
                confirmText: 'Add',
                onConfirm: (value) => {
                    let newUser = {name: value, score: 0};
                    this.friendList.push(newUser)
                    this.$refs.autocomplete.setSelected(newUser)
                }
            })
        }
    }   // methods
}
</script>