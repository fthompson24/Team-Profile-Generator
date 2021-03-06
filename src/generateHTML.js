// populate the HTML with employee data
getEmployees = function(employees) {
    return `${employees.map((employee)=> {
        if(employee.constructor.name === 'Engineer'){
            return `
            <li class="col-span-1 bg-green-50 shadow divide-y divide-gray-500 border-2 border-black">
                <div class="w-full flex items-center justify-between p-6 space-x-6">
                  <div class="flex-1">
                    <div class="flex items-center space-x-3">
                      <h3 class="text-gray-900 text-sm font-medium">${employee.getName()}</h3>
                      <span class="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-grey-100 rounded-full">${employee.getRole()}</span>
                    </div>
                    <p class="mt-1 text-gray-500 text-sm">Employee Id: ${employee.getId()}</p>
                  </div>
                    <svg class="w-20 h-20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </div>
                <div>
                  <div class="-mt-px flex divide-x divide-gray-500">
                    <div class="w-0 flex-1 flex">
                      <a href="mailto:${employee.getEmail()}" target="_blank" class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500">
                        <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                      </a>
                    </div>
                    <div class="-ml-px w-0 flex-1 flex">
                      <a href="https://github.com/${employee.getGithub()}" target="_blank" class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500">
                        <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
            </li>`
        } else {
            return `
            <li class="col-span-1 bg-yellow-50 shadow divide-y divide-gray-500 border-2 border-black">
              <div class="w-full flex items-center justify-between p-6 space-x-6">
                <div class="flex-1">
                  <div class="flex items-center space-x-3">
                    <h3 class="text-gray-900 text-sm font-medium">${employee.getName()}</h3>
                    <span class="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-grey-100 rounded-full">${employee.getRole()}</span>
                  </div>
                  <p class="mt-1 text-gray-500 text-sm">Employee Id: ${employee.getId()}</p>
                </div>
                    <svg class="w-20 h-20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
              <div>
                <div class="-mt-px flex divide-x divide-gray-500">
                  <div class="w-0 flex-1 flex">
                    <a href="mailto:${employee.getEmail()}" class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500">
                      <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </a>
                  </div>
                  <div class="-ml-px w-0 flex-1 flex">
                    <p class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500">
                        <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
                            <path d="M496 128v16a8 8 0 0 1-8 8h-24v12c0 6.627-5.373 12-12 12H60c-6.627 0-12-5.373-12-12v-12H24a8 8 0 0 1-8-8v-16a8 8 0 0 1 4.941-7.392l232-88a7.996 7.996 0 0 1 6.118 0l232 88A8 8 0 0 1 496 128zm-24 304H40c-13.255 0-24 10.745-24 24v16a8 8 0 0 0 8 8h464a8 8 0 0 0 8-8v-16c0-13.255-10.745-24-24-24zM96 192v192H60c-6.627 0-12 5.373-12 12v20h416v-20c0-6.627-5.373-12-12-12h-36V192h-64v192h-64V192h-64v192h-64V192H96z"/>
                        </svg>
                      <span class="ml-3">${employee.getSchool()}</span>
                    </p>
                  </div>
                </div>
              </div>
            </li>`
        }
    }).join('')}`
}

module.exports = data => {

    const { manager, employees } = data;

    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.0.3/tailwind.min.css"/>
        <title>${manager.getName()}'s Team</title>
    </head>
    <body class="container mx-auto bg-red-50">
        <header class="bg-indigo-900">
            <div class="md:flex md:items-center md:justify-between px-10 py-5">
                <div class="flex-1 min-w-0">
                    <h2 class="text-3xl font-bold leading-7 text-white">
                    ${manager.getName()}'s Team Profile
                    </h2>
                </div>
                <div class="mt-4 flex md:mt-0 md:ml-4">
                    <p class="text-white">
                    Generate a team profile by answering command line prompts.
                    </p>
                </div>
            </div>
        </header>
        <main>
            <ul class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 py-5 px-5">
                <li class="col-span-1 bg-blue-50 shadow divide-y divide-gray-500 border-2 border-black">
                    <div class="w-full flex items-center justify-between p-6 space-x-6">
                      <div class="flex-1">
                        <div class="flex items-center space-x-3">
                          <h3 class="text-gray-900 text-sm font-medium">${manager.name}</h3>
                          <span class="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-grey-100 rounded-full">Manager</span>
                        </div>
                        <p class="mt-1 text-gray-500 text-sm">Employee Id: ${manager.id}</p>
                      </div>
                            <svg class="w-20 h-20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                            </svg>
                    </div>
                    <div>
                      <div class="-mt-px flex divide-x divide-gray-500">
                        <div class="w-0 flex-1 flex">
                          <a href="mailto:${manager.email}" target="_blank" class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500">
                            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                          </a>
                        </div>
                        <div class="-ml-px w-0 flex-1 flex">
                          <p class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500">
                            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                            <span class="ml-3">${manager.officeNumber}</span>
                        </p>
                        </div>
                      </div>
                    </div>
                </li>
        ${getEmployees(employees)}
        </ul>
        </main>
        <footer>
        <footer>
    </body>
    </html>`;
};