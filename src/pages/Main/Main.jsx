import React from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import classNames from 'classnames';
import useScrollPosition from '../../lib/useScrollPosition';
import styles from './Main.module.css';

export function Main() {
  const scrollY = useScrollPosition();

  const handleSearchClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className='container mx-auto'>

      <div className='grid grid-cols-5 gap-8'>
        <div className={'bg-blue-200'}>
          <div className='fixed p-4'>
            Left panel
          </div>
        </div>

        <div className='col-span-4 relative'>

          <div className={classNames(
            'sticky top-0 bg-white z-10 flex py-8',
            { [styles.combined]: scrollY > 32 },
          )}>
            <div className='flex-grow'>
              <input
                className={classNames(
                  styles.searchInput,
                  'w-full h-12 p-4 border border-gray-100 rounded-2xl'
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
              )}
              type="button" aria-label="like">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7362 10.2134C15.7362 13.2614 13.2646 15.7323 10.2156 15.7323C7.1667 15.7323 4.69505 13.2614 4.69505 10.2134C4.69505 7.16541 7.1667 4.69452 10.2156 4.69452C13.2646 4.69452 15.7362 7.16541 15.7362 10.2134ZM14.3645 16.1159C13.1909 16.9418 11.76 17.4268 10.2156 17.4268C6.23055 17.4268 3 14.1973 3 10.2134C3 6.22955 6.23055 3 10.2156 3C14.2007 3 17.4313 6.22955 17.4313 10.2134C17.4313 11.7552 16.9474 13.184 16.1233 14.3563C16.1964 14.404 16.2656 14.4599 16.3297 14.5242L20.6287 18.8315C21.1246 19.3283 21.1237 20.133 20.6266 20.6288C20.1296 21.1245 19.3247 21.1236 18.8288 20.6268L14.5298 16.3194C14.4667 16.2562 14.4116 16.1879 14.3645 16.1159Z" fill="#303236"/>
              </svg>
            </button>

            <button className="flex-none flex items-center justify-center w-12 h-12 ml-8 rounded-xl text-gray-400 border border-gray-300" type="button" aria-label="like">
              <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.32473 1.64101L10 7.82579L19.6753 1.64101C19.1796 0.667101 18.1677 -3.05176e-05 17 -3.05176e-05L3 -3.05176e-05C1.83231 -3.05176e-05 0.820432 0.667101 0.32473 1.64101ZM20 3.78953L13.7006 7.89686L20 12.1783V3.78953ZM11.8068 9.0623L10.7861 9.69037C10.304 9.98705 9.69596 9.98705 9.21385 9.69037L8.19325 9.0623L0.318352 14.3463C0.811717 15.3271 1.82728 16 3 16H17C18.1727 16 19.1883 15.3271 19.6816 14.3463L11.8068 9.0623ZM6.2994 7.89686L0 3.78953L0 12.1783L6.2994 7.89686Z" fill="#303236"/>
              </svg>
            </button>
            <div className='flex-none w-64 ml-8 h-12'>
              Красильникова Анастасия
            </div>
          </div>


          <div className={classNames(
            styles.navMenu,
            'sticky z-20 flex space-x-4 bg-blue-100 border-blue-200 rounded-xl px-8 py-4 mb-8 font-semibold bg-opacity-50',
            'transition-all duration-800',
            {[styles.combined]: scrollY > 32},
          )}>
            <div>Налоги</div>
            <div>Доходы и вычеты</div>
            <div>Обращения</div>
            <div>Имущество</div>
            <div>Чеки</div>
          </div>

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
        </div>
      </div>
    </div>
  );
}
