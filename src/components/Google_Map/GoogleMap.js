import React from 'react';

const GoogleMap = () => {
    return (
        <section className='my-20 bg-slate-50 rounded-xl'>
            <iframe className='w-full h-96 rounded-xl' frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20Dhaka+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
            <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=e1503d49ba69983d651252ff22732ccb91062396'></script>
        </section>
    );
};

export default GoogleMap;