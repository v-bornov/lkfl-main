import React from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import classNames from 'classnames';
import useScrollPosition from '../../lib/useScrollPosition';
import styles from './Main.module.css';

export function Main() {
  const scroll = useScrollPosition();
  console.log('XXX scroll', scroll);

  const handleSearchClick = () => {
    window.scrollTo(0, 0);
  }

  return (
    <div className='container mx-auto'>

      <div className='grid grid-cols-5 gap-8'>
        <div className={'bg-blue-300'}>
          Left panel
        </div>

        <StickyContainer className='col-span-4'>
          <Sticky>
            {({ style, distanceFromTop }) => (
              <div style={style} className={classNames({
                [styles.combined]: distanceFromTop < -32,
              })}>

                <div className={`bg-white z-10 flex py-8`}>
                  <div className='flex-grow'>
                    <input
                      className={classNames(
                        styles.searchInput,
                        'w-full h-12 p-4 border border-gray-100 rounded-2xl',
                        'transition duration-400'
                      )}
                      name='search'
                      placeholder='Чем Вам помочь?'
                    />
                  </div>

                  <button
                    onClick={handleSearchClick}
                    className={classNames(
                      styles.searchIcon,
                      'z-20 flex-none invisible flex items-center justify-center w-12 h-12 ml-8 rounded-xl text-gray-400 border border-gray-300',
                      'transition duration-400'
                    )}
                    type="button" aria-label="like">
                    <svg width="20" height="20" fill="red">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"/>
                    </svg>
                  </button>

                  <button
                    className="flex-none flex items-center justify-center w-12 h-12 ml-8 rounded-xl text-gray-400 border border-gray-300"
                    type="button" aria-label="like">
                    <svg width="20" height="20" fill="currentColor">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"/>
                    </svg>
                  </button>
                  <div className='flex-none w-64 ml-8 h-12'>
                    Красильникова Анастасия
                  </div>
                </div>

              </div>
            )}
          </Sticky>

          <Sticky topOffset={80}>
            {({ style, isSticky, wasSticky, distanceFromTop, calculatedHeight }) => (
              <div style={style} className={classNames({
                [styles.sticky]: isSticky,
                [styles.combined]: distanceFromTop < -32,
              })}>

                <div className={classNames(
                  styles.navMenu,
                  'flex space-x-4 bg-blue-100 border-blue-200 rounded-xl px-8 py-4 font-semibold bg-opacity-50',
                  'transition duration-400'
                )}>
                  <div>Налоги</div>
                  <div>Доходы и вычеты</div>
                  <div>Обращения</div>
                  <div>Имущество</div>
                  <div>Чеки</div>
                  <div>{distanceFromTop}</div>
                </div>

              </div>
            )}
          </Sticky>

          <div>
            The standard Lorem Ipsum passage, used since the 1500s
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum."

            Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
            rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
            dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
            incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
            exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
            vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui
            dolorem eum fugiat quo voluptas nulla pariatur?"

            1914 translation by H. Rackham
            "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born
            and I will give you a complete account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure
            itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally
            encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or
            desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in
            which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever
            undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to
            find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids
            a pain that produces no resultant pleasure?"

            Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
            atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique
            sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum
            facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
            impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor
            repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut
            et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente
            delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores
            repellat."

            1914 translation by H. Rackham
            "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and
            demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the
            pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through
            weakness of will, which is the same as saying through shrinking from toil and pain. These cases are
            perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and
            when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every
            pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business
            it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man
            therefore always holds in these matters to this principle of selection: he rejects pleasures to secure
            other greater pleasures, or else he endures pains to avoid worse pains."

            The standard Lorem Ipsum passage, used since the 1500s
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum."

            Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
            rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
            dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
            incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
            exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
            vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui
            dolorem eum fugiat quo voluptas nulla pariatur?"

            1914 translation by H. Rackham
            "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born
            and I will give you a complete account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure
            itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally
            encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or
            desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in
            which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever
            undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to
            find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids
            a pain that produces no resultant pleasure?"

            Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
            atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique
            sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum
            facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
            impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor
            repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut
            et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente
            delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores
            repellat."

            1914 translation by H. Rackham
            "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and
            demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the
            pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through
            weakness of will, which is the same as saying through shrinking from toil and pain. These cases are
            perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and
            when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every
            pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business
            it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man
            therefore always holds in these matters to this principle of selection: he rejects pleasures to secure
            other greater pleasures, or else he endures pains to avoid worse pains."
          </div>
        </StickyContainer>
      </div>
    </div>
  );
}
