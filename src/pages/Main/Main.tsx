import React, { useState } from 'react';
import './styles.css';
import { Tabs, Tab, Button, Input } from '../../components';
import { Content } from './components';

const Main = () => {
    const [activeTab, setActiveTab] = useState<number>(0);

    const handleChange = (itemId: number) => {
        setActiveTab((prevId) => (prevId === itemId ? prevId : itemId));
    };

    return (
        <main className="main">
            <Tabs activeTab={activeTab} handleChange={handleChange}>
                <Tab
                    id={0}
                    title="Заголовок таба 1"
                    description="Равным образом, высококачественный прототип будущего проекта способствует повышению качества анализа существующих паттернов "
                >
                    <Content title="Заголовок таба 1" button={<Button type="button">Кнопкадействия</Button>}>
                        <p className="content__paragraph">
                            Безусловно, начало повседневной работы по формированию позиции способствует подготовке и
                            реализации модели развития.
                        </p>
                        <ul className="content__list">
                            <li>Элемент ненумерованного списка</li>
                            <li>Элемент ненумерованного списка</li>
                        </ul>
                        <p className="content__paragraph">
                            Идейные соображения высшего порядка, а также постоянное информационно-пропагандистское
                            обеспечение нашей деятельности выявляет срочную потребность приоретизации разума над
                            эмоциями.
                        </p>
                        <ol className="content__list">
                            <li>Элемент ненумерованного списка</li>
                            <li>Элемент ненумерованного списка</li>
                        </ol>
                        <p className="content__paragraph">
                            Учитывая ключевые сценарии поведения, глубокий уровень погружения, в своём классическом
                            представлении, допускает внедрение направлений прогрессивного развития. Повседневная
                            практика показывает, что глубокий уровень погружения представляет собой интересный
                            эксперимент проверки модели развития.
                        </p>
                    </Content>
                </Tab>
                <Tab
                    id={1}
                    title="Заголовок таба 2"
                    description="Равным образом, высококачественный прототип будущего проекта способствует повышению качества анализа существующих паттернов "
                >
                    <Content title="Заголовок таба 2" button={<Button type="button">Кнопкадействия</Button>}>
                        <form name="myForm" className="content__form">
                            <Input type="text" placeholder="Имя*" />
                            <Input type="text" placeholder="Имя*" />
                            <Input type="text" placeholder="Имя*" />
                        </form>
                    </Content>
                </Tab>
                <Tab
                    id={3}
                    title="Заголовок таба 3"
                    description="Равным образом, высококачественный прототип будущего проекта способствует повышению качества анализа существующих паттернов "
                >
                    <Content title="Заголовок таба 3" button={<Button type="button">Кнопкадействия</Button>}>
                        <p className="content__paragraph">
                            Сложно сказать, почему сделанные на базе интернет-аналитики выводы подвергнуты целой серии
                            независимых исследований. Для современного мира внедрение современных методик предоставляет
                            широкие возможности для новых предложений. Как принято считать, ключевые особенности
                            структуры проекта набирают популярность среди определенных слоев населения, а значит, должны
                            быть разоблачены. В частности, понимание сути ресурсосберегающих технологий предполагает
                            независимые способы реализации прогресса профессионального сообщества.
                        </p>
                    </Content>
                </Tab>
            </Tabs>
        </main>
    );
};

export default Main;
