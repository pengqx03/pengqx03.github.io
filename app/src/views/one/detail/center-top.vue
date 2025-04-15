<template>
    <div class="container">
        <ul class="list">
            <li class="item">
                <span class="label">城市</span><br>
                <span class="num">{{ city }}</span><el-button @click="openDialog" size="mini" type="text">切换</el-button>
            </li>
            <li class="item">
                <span class="label">今天天气</span><br>
                <span class="num">晴</span>
            </li>
            <li class="item" style="width: 180px">
                <span class="label">气温</span><br>
                <span class="num">5°C ~ 8°C</span>
            </li>
        </ul>
        <h3>近一周天气预报</h3>
        <el-table
        :data="tableData"
        :highlight-selection-row="true">
            <el-table-column
            prop="date"
            label="日期"></el-table-column>
            <el-table-column
            prop="weather"
            label="天气"></el-table-column>
            <el-table-column
            prop="humi"
            label="湿度"></el-table-column>
            <el-table-column
            prop="temp"
            label="温度"></el-table-column>
            <el-table-column
            prop="WD"
            label="风向"></el-table-column>
            <el-table-column
            prop="AP"
            label="气压"></el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            city: '',
            selectId: '',
            options: [
                {
                    id: 1,
                    city: '北京'
                },
                {
                    id: 2,
                    city: '上海'
                },
                {
                    id: 3,
                    city: '广东'
                },
                {
                    id: 4,
                    city: '广西'
                },
                {
                    id: 5,
                    city: '深圳'
                }
            ],
            tableData: [
                {
                    date: '2023-01-01',
                    weather: '晴',
                    humi: '45%',
                    temp: '5°C',
                    WD: '北风',
                    AP: '1012 hPa'
                },
                {
                    date: '2023-01-02',
                    weather: '多云',
                    humi: '50%',
                    temp: '6°C',
                    WD: '东风',
                    AP: '1010 hPa'
                },
                {
                    date: '2023-01-03',
                    weather: '小雨',
                    humi: '60%',
                    temp: '4°C',
                    WD: '南风',
                    AP: '1008 hPa'
                },
                {
                    date: '2023-01-04',
                    weather: '阴',
                    humi: '55%',
                    temp: '3°C',
                    WD: '西风',
                    AP: '1011 hPa'
                },
                {
                    date: '2023-01-05',
                    weather: '晴',
                    humi: '40%',
                    temp: '7°C',
                    WD: '北风',
                    AP: '1013 hPa'
                },
                {
                    date: '2023-01-06',
                    weather: '多云',
                    humi: '52%',
                    temp: '8°C',
                    WD: '东风',
                    AP: '1014 hPa'
                },
                {
                    date: '2023-01-07',
                    weather: '晴',
                    humi: '48%',
                    temp: '9°C',
                    WD: '南风',
                    AP: '1015 hPa'
                }
            ]
        }
    },
    created() {
        this.city = this.getCity()

        // console.log(this.city)
        console.log(this.$route.query.city)
    },
    methods: {
        getCity() {
            
            switch(parseInt(this.$route.query.city)) {
                case 1:
                    return '北京';
                case 2:
                    return '上海'
                case 3:
                    return '广东'
                case 4:
                    return '广西'
                case 5:
                    return '深圳'
            }
        },
        openDialog() {
            this.$router.push(`/one`)
        },
    }
}
</script>

<style lang="scss" scoped>
.container {
    position: relative;
}
.list {
    display: flex;
    justify-content: space-between;
    list-style: none;

    position: absolute;
    top: 80px;

    width: 80%;
    
    left: 10%;
    .item {
        width: 100px;
        .label {

        }

        .num {
            color: rgb(83, 215, 22);
            font-size: 32px;
        }
    }
}
h3 {
    position: absolute;
    top: 160px;
    left: 10%;
    color: #e3e3e3;

    border-left: 5px solid rgb(199, 212, 14);
    padding-left: 6px;
}
.el-table {
    position: absolute;
    top: 180px;
}

::v-deep .el-table,
::v-deep .el-table th,
::v-deep .el-table tr,
::v-deep .el-table td {
    background-color: transparent !important;
}

::v-deep .el-table {
    width: 80%;
    left: 10%;
}

::v-deep .el-table__body-wrapper {
    max-height: 240px;
    overflow-y: auto;
}

::v-deep ::-webkit-scrollbar {
    width: 2px;
}
</style>