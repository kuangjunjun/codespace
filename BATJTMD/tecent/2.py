import openai  
openai.api_key = "   "  #这里输入openai的sdk
COMPLETION_MODEL = "text-davinci-003"  #模型常量   达芬奇（文本生成） 完成
prompt = """    //模板  输入需求
Consideration product: 工厂现货PVC充气青蛙夜市地摊热卖充气玩具发光儿童水上玩具

1.Compose human readable product title used
on Amazon in english within 20 words
2.Write 5 selling points for the products in Amzon
3.Evaluat a price range for this product in U.S.

Output the result in json format with three properties called title,
selling_points and price_range
"""
#定义函数  完成封装
def get_response(prompt) :
    completions = openai.Completion.create(
        #大模型很值钱
        engine=COMPLETION_MODEL, #选择模型
        prompt = prompt,  # 提示词，获取需求
        max_tokens=512,  #控制算力
        n = 1, # 返回一条结果
        stop=None, #不要停下来
        temperature=0.0   #自由发挥度 0-2
    )
    message = completions.choices[0].text #获取completions对象的choice的第一个结果
    return message
    print(get_response(prompt)) #输出