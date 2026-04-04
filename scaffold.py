import os
import shutil

base_dir = r"c:\personal\dispose-portal-web\dispose-portal-web"

folders = [
    "src/app",
    "src/core/api", "src/core/auth", "src/core/tenant", "src/core/permissions", 
    "src/core/hooks", "src/core/constants", "src/core/config", "src/core/types",
    "src/features/auth/pages", "src/features/auth/components",
    "src/features/dashboard/pages", "src/features/dashboard/components",
    "src/features/drivers/pages", "src/features/drivers/components",
    "src/features/pickups/pages", "src/features/pickups/components",
    "src/features/subscription/pages", "src/features/subscription/components",
    "src/features/analytics/pages", "src/features/analytics/components",
    "src/features/admin/pages", "src/features/admin/components",
    "src/features/notifications/pages", "src/features/notifications/components",
    "src/features/media/components",
    "src/features/system-settings/pages", "src/features/system-settings/components",
    "src/layout",
    "src/shared/ui", "src/shared/forms", "src/shared/tables", "src/shared/charts", "src/shared/loaders",
    "src/styles",
    "public/assets"
]

for folder in folders:
    os.makedirs(os.path.join(base_dir, folder), exist_ok=True)

files = [
    "src/app/App.tsx", "src/app/router.tsx", "src/app/AppProviders.tsx", 
    "src/app/ErrorBoundary.tsx", "src/app/ProtectedRoute.tsx", 
    "src/app/PermissionGuard.tsx", "src/app/TenantGuard.tsx",
    
    "src/core/api/httpClient.ts", "src/core/api/tokenManager.ts", 
    "src/core/api/requestInterceptor.ts", "src/core/api/responseInterceptor.ts", 
    "src/core/api/apiErrorHandler.ts",
    
    "src/core/auth/AuthProvider.tsx", "src/core/auth/useAuth.ts", "src/core/auth/auth.store.ts",
    
    "src/core/tenant/TenantProvider.tsx", "src/core/tenant/useTenant.ts", "src/core/tenant/tenant.store.ts",
    
    "src/core/permissions/PermissionProvider.tsx", "src/core/permissions/usePermission.ts", "src/core/permissions/permission.utils.ts",
    
    "src/core/hooks/useDebounce.ts", "src/core/hooks/usePagination.ts", "src/core/hooks/useQueryParams.ts",
    
    "src/core/constants/routes.ts", "src/core/constants/permissions.ts", "src/core/constants/roles.ts",
    
    "src/core/config/app.config.ts",
    
    "src/core/types/common.types.ts", "src/core/types/auth.types.ts", 
    "src/core/types/user.types.ts", "src/core/types/api.types.ts",
    
    "src/features/auth/pages/LoginPage.tsx", "src/features/auth/pages/VerifyOtpPage.tsx", 
    "src/features/auth/pages/SelectOrganizationPage.tsx",
    "src/features/auth/auth.api.ts", "src/features/auth/auth.schema.ts", "src/features/auth/auth.query.ts",
    
    "src/features/dashboard/pages/DashboardHome.tsx", "src/features/dashboard/dashboard.query.ts",
    
    "src/features/drivers/drivers.api.ts", "src/features/drivers/drivers.query.ts", "src/features/drivers/drivers.schema.ts",
    
    "src/features/pickups/pickups.api.ts", "src/features/pickups/pickups.query.ts", "src/features/pickups/pickups.schema.ts",
    
    "src/features/subscription/subscription.api.ts", "src/features/subscription/subscription.query.ts",
    
    "src/features/analytics/analytics.api.ts", "src/features/analytics/analytics.query.ts",
    
    "src/features/admin/admin.api.ts", "src/features/admin/admin.query.ts",
    
    "src/features/notifications/notifications.api.ts",
    "src/features/media/media.api.ts",
    "src/features/system-settings/settings.api.ts",
    
    "src/layout/DashboardLayout.tsx", "src/layout/Sidebar.tsx", "src/layout/Topbar.tsx", 
    "src/layout/Footer.tsx", "src/layout/NavigationConfig.ts",
    
    "src/shared/ui/Button.tsx", "src/shared/ui/Input.tsx", "src/shared/ui/Modal.tsx", 
    "src/shared/ui/Badge.tsx", "src/shared/ui/Card.tsx",
    
    "src/styles/globals.css", "src/styles/theme.css",
    
    ".env", ".env.production",
    "public/favicon.ico"
]

for file in files:
    file_path = os.path.join(base_dir, file.replace("/", os.sep))
    if not os.path.exists(file_path):
        with open(file_path, 'w') as f:
            pass
            
# Move App.tsx if it exists and app/App.tsx is empty
old_app = os.path.join(base_dir, "src", "App.tsx")
new_app = os.path.join(base_dir, "src", "app", "App.tsx")
if os.path.exists(old_app):
    if os.path.exists(new_app) and os.path.getsize(new_app) == 0:
        os.remove(new_app)
    shutil.move(old_app, new_app)
    
old_index_css = os.path.join(base_dir, "src", "index.css")
new_globals_css = os.path.join(base_dir, "src", "styles", "globals.css")
if os.path.exists(old_index_css):
    if os.path.exists(new_globals_css) and os.path.getsize(new_globals_css) == 0:
        os.remove(new_globals_css)
    shutil.move(old_index_css, new_globals_css)

print("Structure created successfully.")
