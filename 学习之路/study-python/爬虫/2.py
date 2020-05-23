import pandas as pd
from snownlp import SnowNLP


def convert(comment):
    snow = SnowNLP(str(comment))
    sentiments = snow.sentiments
    return sentiments


if __name__ == '__main__':
    data = pd.read_csv('./climb.csv', '\t')
    data['情感评分'] = data.comment.apply(convert)

    data.sort_values(by='情感评分', ascending=False, inplace=True)
    data.to_csv('./climb_snownlp.csv', sep='\t', index=False, encoding='utf-8')
