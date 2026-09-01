
export function Footer(){

    return(
        <footer>
            <div className="contacts">
                <h3>Contacts</h3>
                <p>Email</p>
                <a href="mailto:tenderlyejovwoke8@gmail.com">tenderlyejovwoke8@gmail.com</a>

                <p>Telephone Number</p>
                <a href="tel:+2347026511027">+234 7026511027</a>
            </div>

            <p className="copyRightSection">&copy; {new Date().getFullYear()} Dreamie Genie, All Rights Reserved.</p>
        </footer>
    );
}

