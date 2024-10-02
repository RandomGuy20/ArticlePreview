

//For Modal page
const btn = document.querySelector('.btn');
const socialMedia = document.querySelector('.social-media');
const shareImage = document.querySelector('.share-image');
const socialMediaButtons = document.querySelectorAll('.social-media button');
const author = document.querySelector('.author');
const aboutAuthor = document.querySelector('.about-author');

let windowwidth;


btn.addEventListener('click', () => 
{
        SetSocialMediaButtonVisibiity();
});


socialMediaButtons.forEach((button) =>
{
    button.addEventListener('click', () =>
    {
        SetSocialMediaButtonVisibiity();
    });
});


function SetSocialMediaButtonVisibiity()
{

    const viewPortWidth = window.innerWidth;

    if(socialMedia.classList.contains('is-visible'))
    {
        socialMedia.classList.remove('is-visible');
        socialMedia.classList.add('not-visible');
        aboutAuthor.classList.remove('active-background');
    }
    else    
    {
        socialMedia.classList.remove('not-visible');
        socialMedia.classList.add('is-visible');
        aboutAuthor.classList.add('active-background');
    }


    if(btn.classList.contains('dark-greyish-background'))
    {
        btn.classList.remove('dark-greyish-background');
        btn.classList.add('light-greyish-background');
    }
    else
    {
        btn.classList.remove('light-greyish-background');
        btn.classList.add('dark-greyish-background');
    }


    if(!shareImage.classList.contains('white-filter'))
    {
        shareImage.classList.add('white-filter');
    }
    else
    {
        shareImage.classList.remove('white-filter');
    }

    if(viewPortWidth <= 375)
    {
        if(socialMedia.classList.contains('is-visible'))
        {
            author.classList.remove("is-visible");
            author.classList.add("not-visible");
            btn.classList.remove('dark-greyish-background');
            btn.classList.add('desaturdated-dark-blue');
        }
        else
        {
            author.classList.remove("not-visible");
            author.classList.add("is-visible");
            btn.classList.remove('desaturdated-dark-blue');
            btn.classList.add('light-greyish-background');
        }

        if(aboutAuthor.classList.contains("is-visible"))
        {
            aboutAuthor.classList.remove("is-visible");
            aboutAuthor.classList.add("not-visible");
        }
    }
}


// Function to update the display based on window size
function updateSizeDisplay() 
{
    windowwidth = window.innerWidth;



    // Perform actions based on the size
    if (windowwidth > 376 || windowwidth < 376) 
    {

            author.classList.add("is-visible");
            author.classList.remove("not-visible");

            socialMedia.classList.remove('is-visible');
            socialMedia.classList.add('not-visible');

            btn.classList.remove('dark-greyish-background');
            btn.classList.remove('desaturdated-dark-blue');
            btn.classList.add('light-greyish-background');

            shareImage.classList.remove('white-filter');

            aboutAuthor.classList.remove('active-background');
    } 

}


updateSizeDisplay();


window.addEventListener('resize', updateSizeDisplay);


