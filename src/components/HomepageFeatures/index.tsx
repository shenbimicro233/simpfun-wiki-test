import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: '社区维基',
    description: (
      <>
        我们的源码在 Github 开源！
        <br />
        欢迎加入我们的编写！
      </>
    ),
  },
  {
    title: '完全免费',
    description: (
      <>
        您可以自由免费查看本维基，
        <br />
        不需要一分钱。
      </>
    ),
  },
  {
    title: '最新内容',
    description: <>本维基已同步 SFE v4.0 的信息。</>,
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
