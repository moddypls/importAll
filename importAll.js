function importAll()
{
    let awaited_modules = Promise.all(Array.from(arguments).map(element => import(element)));
    return () =>
    {
        let modules = {}
        return awaited_modules.then( _modules => 
        {
            _modules.map((element, i) => modules[arguments[i]] = element.default) 
            return new Promise((resolve)=>resolve(modules));
        });

    }
}
