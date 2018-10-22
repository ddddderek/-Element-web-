<template>
	<section id="user_wrapper">
		<div class="common-box">
			<div class="common-box-title">
				<span>用户列表</span>
			</div>
			<div class="common-box-body">
				<el-table class="common-table" style="width: 100%;" :data="data" ref="tableData" size="mini" v-loading="listLoading" border header-row-class-name="common-table-header">
                    <el-table-column label="序号" width="60" align="center">
                        <template slot-scope="scope">
                            <span v-if="formData.pageNo == 1">{{`${scope.$index < 9 ? '0':''}${scope.$index+1}`}}</span>
                            <span v-else>{{`${(parseInt(formData.pageNo)-1)*parseInt(formData.pageSize)+scope.$index+1}`}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="value1" label="方案码" align="center"></el-table-column>
                    <el-table-column prop="value2" label="方案码" align="center"></el-table-column>
                    <el-table-column prop="value3" label="方案码" align="center"></el-table-column>
                    <el-table-column prop="value4" label="方案码" align="center"></el-table-column>
                    <el-table-column prop="value5" label="方案码" align="center"></el-table-column>
                    <el-table-column prop="value6" label="方案码" align="center"></el-table-column>
                    <el-table-column label="操作" align="center">
                    	<template slot-scope="scope">
                    		<el-button type="text">更改权限</el-button>
                    		<el-button type="text" style="color:#f56c6c">删除</el-button>
                    	</template>
                    </el-table-column>
                </el-table>
                <el-pagination class="common-pagination" background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="formData.pageNo" :page-sizes="[10, 20, 30, 40]" :page-size="formData.pageSize" layout="slot, total, sizes, prev, pager, next" :total="total">
                </el-pagination>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		data () {
			return {
				// loading
				listLoading: false,

				// 页面参数
				formData: {
	               pageNo: 1,
	               pageSize: 10,
	            },

	            // 表格数据
				data:[
					{
						value1: 1,
						value2: 2,
						value3: 3,
						value4: 4,
						value5: 5,
						value6: 6
					}
				],

				// 总条数
				total: 0,
			}
		},
		methods:{
			//页面分页
	        handleSizeChange(val) {
	            this.formData.pageSize = val
	            this.getSearchGiftPlan(false)
	        },
	        handleCurrentChange(val) {
	            this.formData.pageNo = val
	            this.getSearchGiftPlan(false)
	        },
		}
	}
</script>